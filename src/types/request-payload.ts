export type SpeechPayload = {
  audio_format?: "mp3" | "wav";
  input: string;
  model?: string;
  voice_id: string;
};
