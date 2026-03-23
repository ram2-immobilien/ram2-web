"use client";

import DualSlider from "@/components/DualSlider/DualSlider";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SearchBar } from "@/components/Search/SearchBar";
import { AdvancedFilters } from "@/components/Search/AdvancedFilters";

export default function Home() {
    const t = useTranslations("home")

    return (
        <p>{t("header")}</p>
    );
}