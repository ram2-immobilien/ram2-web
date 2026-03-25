import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
  error?: string;
}

export default function TextField({
  label,
  placeholder,
  value,
  setValue,
  type = "text",
  error,
}: TextFieldProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
