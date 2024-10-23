import { Audio } from "../../types/audio";
import styles from "./styles.module.css";

type Props = {
  audioList: Audio[];
  onRemoveAudio: (id: string) => void;
};

export const AudioList = ({ audioList, onRemoveAudio }: Props) => (
  <div className={styles.audioList}>
    {audioList.map((audio) => (
      <div key={audio.id} className={styles.audioContainer}>
        <audio controls src={audio.url} className={styles.audioPlayer} />
        <button
          onClick={() => onRemoveAudio(audio.id)}
          className={styles.removeButton}
        >
          ✖
        </button>
      </div>
    ))}
  </div>
);
