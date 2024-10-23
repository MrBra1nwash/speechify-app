import { useState } from "react";
import { AppState } from "../../types/app-state";
import { Audio } from "../../types/audio";

export const useGetAppState = () => {
  const [voice, setVoice] = useState("henry");
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(0);
  const [speedRate, setSpeedRate] = useState(0);

  const state: AppState = {
    voice,
    text,
    pitch,
    speedRate,
  };

  return {
    ...state,
    setVoice,
    setText,
    setPitch,
    setSpeedRate,
  };
};
