"use client"

import { useTranslations } from "next-intl";
import SliderMultiple from "@/components/Slider-multiple/SliderMultiple";

export default function Home() {
    const t = useTranslations("home")

    return (
 <div>
            <p>{t("header")}</p>

            <SliderMultiple />
</div>
    );
}
