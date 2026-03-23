"use client";

import DualSlider from "@/components/DualSlider/DualSlider";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SearchBar } from "@/components/Search/SearchBar";
import { AdvancedFilters } from "@/components/Search/AdvancedFilters";

export default function Home() {
    return (
        <section style={{ width: "100%", maxWidth: 1200, margin: "0 auto", paddingTop: 24 }}>
            <SearchBar />
            <div style={{ marginTop: 35 }}>
                <AdvancedFilters />
            </div>
        </section>
    );
}