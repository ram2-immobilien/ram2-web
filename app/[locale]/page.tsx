"use client";

import DualSlider from "@/components/DualSlider/DualSlider";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("home");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000000);
  
  return (
      <DualSlider
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        lowerLimit={0}
        upperLimit={2000000}
        step={1000}
      />
  );
}
