import { ChangeEvent } from "react";
import styles from "./styles.module.css";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const TextArea = ({ value, onChange }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      placeholder="Begin by typing your text or simply paste the content you wish to transform into natural-sounding speech."
      className={styles.textarea}
      value={value}
      onChange={handleOnChange}
    />
  );
};
