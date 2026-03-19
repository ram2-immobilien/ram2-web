import styles from "./TextArea.module.css";

interface TextAreaProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}

export default function TextArea({
  label,
  placeholder,
  value,
  setValue,
  error,
}: TextAreaProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles.textarea} ${error ? styles.textareaError : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
