"use client";

import { useTranslations } from "next-intl";
import { SearchBar } from "@/components/Search/SearchBar";
import { AdvancedFilters } from "@/components/Search/AdvancedFilters";

export default function Home() {
    const t = useTranslations("home");

    return (
        <section style={{ width: "100%", maxWidth: 1200, margin: "0 auto", paddingTop: 24 }}>
            <h1 style={{ marginBottom: 24, fontSize: 24, fontWeight: 700 }}>
                {t("header")}
            </h1>

            <SearchBar />
            <div style={{ marginTop: 35 }}>
                <AdvancedFilters />
            </div>
        </section>
    );
}

