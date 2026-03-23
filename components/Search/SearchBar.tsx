

import { SearchInput } from "./SearchInput";
import styles from "./SearchBar.module.css";
import { useTranslations } from "next-intl";

export const SearchBar = () => {
  const t = useTranslations("home.filters");

  const inputs = [
    {
      label: t("property"),
      values: [t("property_apartment"), t("property_office"), t("property_1plus")],
    },
    { label: t("country"), values: [t("country_spain")] },
    { label: t("city"), values: [t("city_madrid"), t("city_valencia")] },
  ];

  return (
    <div className={styles.barContainer}>
      {inputs.map((input, index) => (
        <div key={index} className={styles.inputWrapper}>
          <SearchInput label={input.label} values={input.values} />
        </div>
      ))}
    </div>
  );
};