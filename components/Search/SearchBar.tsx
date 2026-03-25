import { useState } from "react";
import { SearchInput } from "./SearchInput";
import styles from "./SearchBar.module.css";
import { useTranslations } from "next-intl";

export const SearchBar = () => {
  const t = useTranslations("home.filters");

  
  const [filters, setFilters] = useState({
    property: "",
    country: "",
    city: "",
  });

  const inputs = [
    {
      id: "property",
      label: t("property"),
      values: [t("property_apartment"), t("property_office"), t("property_1plus")],
    },
    { id: "country", label: t("country"), values: [t("country_spain")] },
    { id: "city", label: t("city"), values: [t("city_madrid"), t("city_valencia")] },
  ];

  return (
    <div className={styles.barContainer}>
      {inputs.map((input) => (
        <div key={input.id} className={styles.inputWrapper}>
          <SearchInput 
            label={input.label} 
            values={input.values}
            selectedValue={filters[input.id as keyof typeof filters]}
            onChange={(val) => setFilters({ ...filters, [input.id]: val })}
          />
        </div>
      ))}
    </div>
  );
};