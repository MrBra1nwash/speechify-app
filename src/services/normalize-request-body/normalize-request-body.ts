import { AppState } from "../../types/app-state";
import { SpeechPayload } from "../../types/request-payload";
import { wrapWithSSML } from "../wrap-with-ssml/wrap-with-ssml";

export const normalizeRequestBody = (state: AppState): SpeechPayload => ({
  audio_format: "mp3",
  model: "simba-english",
  input: wrapWithSSML({
    pitch: state.pitch,
    speedRate: state.speedRate,
    text: state.text,
  }),
  voice_id: state.voice,
});
