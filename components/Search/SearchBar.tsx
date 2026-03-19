import { SearchInput } from "./SearchInput";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.barContainer}>
      
      <div className={styles.inputWrapper}>
        <SearchInput
          label="Propiedad"
          values={["Apartamento", "Oficina", "1+"]}
        />
      </div>

      <div className={styles.inputWrapper}>
        <SearchInput
          label="País"
          values={["España"]}
        />
      </div>

      <div className={styles.inputWrapper}>
        <SearchInput
          label="Ciudad"
          values={["Madrid", "Valencia"]}
        />
      </div>

    </div>
  );
};