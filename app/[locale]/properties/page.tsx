"use client"

import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("properties");

    return (
        <p>{t("header")}</p>
    );
}
