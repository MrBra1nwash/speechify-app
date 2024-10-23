export type Chunk = {
  type: "word";
  start: number;
  end: number;
  start_time: number;
  end_time: number;
  value: string;
};
