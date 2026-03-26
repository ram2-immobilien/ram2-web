import { useState } from "react";
import { SearchInput } from "./SearchInput";
import styles from "./SearchBar.module.css";
import { useTranslations } from "next-intl";


const SEARCH_CONFIG = [
  { id: "property", options: ["apartment", "office", "1plus"] },
  { id: "country", options: ["spain"] },
  { id: "city", options: ["madrid", "valencia"] },
];

export const SearchBar = () => {
  const t = useTranslations("home.filters");

  // Estado inicial: cada filtro es un ARRAY vacío
  const [filters, setFilters] = useState<Record<string, string[]>>({
    property: [],
    country: [],
    city: [],
  });

  return (
    <div className={styles.barContainer}>
      {SEARCH_CONFIG.map((conf) => (
        <div key={conf.id} className={styles.inputWrapper}>
          <SearchInput
            label={t(conf.id)}
            values={conf.options.map(opt => t(`${conf.id}_${opt}`))}
            selectedValues={filters[conf.id]}
            onChange={(newValues) => setFilters({ ...filters, [conf.id]: newValues })}
          />
        </div>
      ))}
    </div>
  );
};