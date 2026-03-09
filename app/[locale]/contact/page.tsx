"use client"

import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("contact")

    return (
        <p>{t("header")}</p>
    );
}
