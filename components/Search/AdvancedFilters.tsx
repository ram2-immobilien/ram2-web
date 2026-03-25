"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SearchInput } from "./SearchInput";

export const AdvancedFilters = () => {
  const t = useTranslations("home.filters");

  const filters = [
    {
      label: t("property"),
      values: [t("property_apartment"), t("property_office"), t("property_1plus")],
    },
    { label: t("country"), values: [t("country_spain")] },
    {
      label: t("city"),
      values: [t("city_madrid"), t("city_valencia")],
    },
    {
      label: t("tags"),
      values: [t("tag_garage"), t("tag_garden"), t("tag_1plus")],
    },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>(
    filters.map(() => "")
  );

  const handleChange = (index: number, value: string) => {
    const newSelected = [...selectedValues];
    newSelected[index] = value;
    setSelectedValues(newSelected);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      {filters.map((filter, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <SearchInput
            label={filter.label}
            values={filter.values}
            selectedValue={selectedValues[index]}
            onChange={(value) => handleChange(index, value)}
          />
        </div>
      ))}
    </div>
  );
};