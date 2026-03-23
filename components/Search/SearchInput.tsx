import { ChevronDown } from "lucide-react";
import styles from "./SearchInput.module.css";

interface Props {
  label: string;
  placeholder?: string;
  values?: string[];
}

export const SearchInput = ({ label, placeholder, values }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.label}>{label}</span>
      <div className={styles.selectBox}>
        <div className={styles.valuesWrapper}>
          {values?.length ? (
            values.map((v, i) => (
              <span key={i} className={styles.tag}>
                {v}
              </span>
            ))
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
        </div>
        <ChevronDown size={16} color="#777" />
      </div>
    </div>
  );
};