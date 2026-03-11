import styles from "./TextArea.module.css";

interface TextAreaProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
  rows?: number;
}

export default function TextArea({
  label,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  error,
  name,
  id,
  rows = 5,
}: TextAreaProps) {
  const textareaId = id || name || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={textareaId} className={styles.label}>
        {label}
      </label>
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.textareaError : ""} ${disabled ? styles.textareaDisabled : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
