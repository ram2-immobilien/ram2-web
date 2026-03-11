"use client"

import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("home")

    return (
        <p>{t("header")}</p>
    );
}