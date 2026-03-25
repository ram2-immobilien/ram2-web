import { useState } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  label: string;
  values?: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ label, values = [], selectedValue, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>

      {/* Botón principal del selector */}
      <div className={styles.selectBox} onClick={() => setIsOpen(!isOpen)}>
        <span className={selectedValue ? styles.selectedTag : styles.placeholder}>
          {selectedValue || "Seleccionar..."}
        </span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Lista desplegable */}
      {isOpen && values.length > 0 && (
        <div className={styles.dropdown}>
          {values.map((value) => (
            <button
              key={value}
              className={selectedValue === value ? styles.activeOption : styles.option}
              onClick={() => {
                onChange(value);
                setIsOpen(false);
              }}
            >
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};