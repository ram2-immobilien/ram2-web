"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SliderMultiple from "@/components/Slider-multiple/SliderMultiple";

export default function Home() {
  const t = useTranslations("home");

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000000);

  return (
    <div>
      <p>{t("header")}</p>

      <SliderMultiple
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        lowerLimit={0}
        upperLimit={2000000}
      />
      <p>
        {minValue} - {maxValue}
      </p>
    </div>
  );
}
