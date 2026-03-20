"use client"

import { useState } from "react";
import { useTranslations } from "next-intl";
import SliderMultiple from "@/components/Slider-multiple/SliderMultiple";

export default function Home() {
    const t = useTranslations("home")

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2000000);

    return (
 <div>
            <p>{t("header")}</p>

            <SliderMultiple       
        min={min}
        max={max}
        setMin={setMin}
        setMax={setMax}
      />


</div>
    );
}
