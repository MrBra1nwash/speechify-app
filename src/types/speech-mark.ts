export type SpeechMark = {
  type: "word" | "sentence";
  start: number;
  end: number;
  start_time: number;
  end_time: number;
  value: string;
};
