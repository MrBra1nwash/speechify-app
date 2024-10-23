import { ChangeEvent } from "react";
import styles from "./styles.module.css";

type Props = {
  min: number;
  max: number;
  value: number;
  leftLabel?: string;
  rightLabel?: string;
  label?: string;
  onChange: (value: number) => void;
};

export const Slider = ({
  min,
  max,
  value,
  leftLabel = "Low",
  rightLabel = "High",
  label,
  onChange,
}: Props) => {
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.subLabelWrapper}>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        className={styles.input}
      />
      <span>{value}%</span>
    </div>
  );
};
