import { useCallback, useEffect, useState } from "react";
import { fetchAudio, normalizeRequestBody } from "../../services";
import { useFetchData } from "../../services/use-fetch-data/use-fetch-data";
import { useGetAppState } from "../../services/use-get-app-state/use-get-app-state";
import { useGetVoicesOptions } from "../../services/use-get-voices/use-get-voices";
import { Audio } from "../../types/audio";
import { SpeechResponse } from "../../types/speech-response";
import { AudioList } from "../AudioList/AudioList";
import { Select } from "../Select/Select";
import { Slider } from "../Slider/Slider";
import { TextArea } from "../TextArea/TextArea";
import styles from "./styles.module.css";

export const TextToSpeech = () => {
  const {
    pitch,
    speedRate,
    text,
    voice,
    setPitch,
    setSpeedRate,
    setText,
    setVoice,
  } = useGetAppState();

  const [audioList, setAudioList] = useState<Audio[]>([]);

  const voiceOptions = useGetVoicesOptions();
  const { data, loading, error, fetchData } = useFetchData<SpeechResponse>({
    method: "POST",
    url: "v1/audio/speech",
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    const handleAudio = async () => {
      if (data && data.audio_data) {
        const audioBlob = await fetchAudio(data.audio_data);
        const audioUrl = URL.createObjectURL(audioBlob);

        setAudioList((prevList) => [
          ...prevList,
          { url: audioUrl, id: Date.now().toString() },
        ]);
      }
    };

    handleAudio();
  }, [data]);

  const handleGenerate = async () => {
    if (!text.trim()) return;

    const payload = normalizeRequestBody({
      pitch,
      speedRate,
      text,
      voice,
    });

    await fetchData(payload);
  };

  const handleRemoveAudio = useCallback((id: string) => {
    setAudioList((prevList) => prevList.filter((audio) => audio.id !== id));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rowWrapper}>
        <div className={styles.textAreaWrapper}>
          <TextArea value={text} onChange={setText} />
          <button onClick={handleGenerate} className={styles.button}>
            Generate
          </button>
        </div>
        <div className={styles.controls}>
          <Select
            value={voice}
            options={voiceOptions}
            onChange={setVoice}
            label="Voice"
          />
          <Slider
            label="Pitch"
            min={-50}
            max={50}
            value={pitch}
            onChange={setPitch}
          />
          <Slider
            label="Speed Rate"
            min={-50}
            max={50}
            value={speedRate}
            onChange={setSpeedRate}
          />
        </div>
      </div>
      <AudioList audioList={audioList} onRemoveAudio={handleRemoveAudio} />
    </div>
  );
};
