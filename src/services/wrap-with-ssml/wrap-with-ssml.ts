import { AppState } from "../../types/app-state";
import { escapeSSMLChars } from "../escape-ssml-chars/escape-ssml-chars";
import { wrapWithTag } from "../wrap-with-tag/wrap-with-tag";

type Params = {
  text: AppState["text"];
  pitch: AppState["pitch"];
  speedRate: AppState["speedRate"];
};

export const wrapWithSSML = ({ pitch, speedRate, text }: Params) => {
  const normalizedText = escapeSSMLChars(text);
  const shouldWrapWithPosody = normalizedText && (!!pitch || !!speedRate);
  const innerString = shouldWrapWithPosody
    ? wrapWithTag({
        content: normalizedText,
        tagName: "prosody",
        attributes: {
          ...(pitch ? { pitch: `${pitch}%` } : {}),
          ...(speedRate ? { rate: `${speedRate}%` } : {}),
        },
      })
    : normalizedText;

  return wrapWithTag({
    tagName: "speak",
    content: innerString,
  });
};
