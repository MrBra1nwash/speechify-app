import { Chunk } from "./chunk";
import { SpeechMark } from "./speech-mark";

export type SpeechResponse = {
  audio_data: string;
  audio_format: string;
  billable_characters_count: number;
  speech_marks: SpeechMark;
  chunks: Chunk[];
};
