"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SliderMultiple from "@/components/Slider-multiple/SliderMultiple";

export default function Home() {
  const t = useTranslations("home");

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000000);
  const [unit, setUnit] = useState("€")
  return (
    <div>
      <p>{t("header")}</p>

      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="€">€ Euros</option>
        <option value="$">$ Dólares</option>
        <option value="£">£ Libras</option>
      </select>

      <SliderMultiple
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        
        lowerLimit={0}
        upperLimit={2000000}

        step={1000}
        unit={unit}
      />
      <p>
        {minValue} - {maxValue}
      </p>
    </div>
  );
}
