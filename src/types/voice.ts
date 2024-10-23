import { Language } from "./language";

export type Voice = {
  id: string;
  type: string;
  display_name: string;
  languages: Language[];
  model: string;
  gender: string;
  preview_audio: string;
  avatar_image: string;
};
