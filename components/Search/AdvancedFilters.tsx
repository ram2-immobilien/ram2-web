"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { SearchInput } from "./SearchInput";

const ADVANCED_CONFIG = [
  { id: "property", options: ["apartment", "office", "1plus"] },
  { id: "country", options: ["spain"] },
  { id: "city", options: ["madrid", "valencia"] },
  { id: "tags", options: ["garage", "garden", "1plus"] },
];

export const AdvancedFilters = () => {
  const t = useTranslations("home.filters");

  // Estado que maneja un objeto con arrays para cada categoría
  const [state, setState] = useState<Record<string, string[]>>({
    property: [],
    country: [],
    city: [],
    tags: [],
  });

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      {ADVANCED_CONFIG.map((filter) => (
        <div key={filter.id} style={{ marginBottom: "20px" }}>
          <SearchInput
            label={t(filter.id)}
            values={filter.options.map(opt => t(`${filter.id}_${opt}`))}
            selectedValues={state[filter.id]}
            onChange={(vals) => setState({ ...state, [filter.id]: vals })}
          />
        </div>
      ))}
    </div>
  );
};