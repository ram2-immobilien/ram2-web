import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
}

export default function TextField({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
  name,
  id,
}: TextFieldProps) {
  const inputId = id || name || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.wrapper}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.inputError : ""} ${disabled ? styles.inputDisabled : ""}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
