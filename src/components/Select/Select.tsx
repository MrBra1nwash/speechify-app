import { ChangeEvent } from "react";
import styles from "./styles.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  label?: string;
};

export const Select = ({ value, options, label, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value);

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        value={value}
        onChange={handleChange}
        style={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          cursor: "pointer",
          outline: "none",
          width: "100%",
          background: "#fff",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
