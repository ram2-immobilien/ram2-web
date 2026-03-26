import { useState } from "react";
// Cambiamos Lucide por FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchInput.module.css";

interface Props {
  label: string;
  placeholder?: string;
  values?: string[];
  selectedValues: string[]; // Ahora es un array
  onChange: (values: string[]) => void; // Devuelve el array actualizado
}

export const SearchInput = ({ label, placeholder, values, selectedValues, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value: string) => {
    // Lógica múltiple: si ya está, lo quita; si no, lo añade
    const newSelection = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    
    onChange(newSelection);
  };

  return (
    <div className={styles.inputContainer}>
      <span className={styles.label}>{label}</span>

      <div className={styles.selectBox} onClick={() => setIsOpen((v) => !v)}>
        <div className={styles.valuesWrapperHorizontal}>
          {selectedValues.length > 0 ? (
            selectedValues.map((val, index) => (
              <span key={index} className={styles.selectedTag}>
                {val}
              </span>
            ))
          ) : (
            <span className={styles.placeholder}>{placeholder || "Seleccionar..."}</span>
          )}
        </div>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`} 
        />
      </div>

      {isOpen && values && (
        <div className={styles.optionsList}>
          {values.map((value, index) => {
            const isSelected = selectedValues.includes(value);
            return (
              <button
                key={index}
                type="button"
                className={isSelected ? styles.optionSelected : styles.optionUnselected}
                onClick={(e) => {
                  e.stopPropagation(); // Evita que el dropdown se cierre al elegir varios
                  toggleOption(value);
                }}
              >
                {value}
              </button>
            );
          })}
          <button 
            className={styles.closeButton} 
            onClick={() => setIsOpen(false)}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};