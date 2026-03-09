"use client"

import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("about_us");

    return (
        <p>{t("header")}</p>
    );
}
