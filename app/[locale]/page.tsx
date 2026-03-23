"use client";

import DualSlider from "@/components/DualSlider/DualSlider";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("home");
  
  return (
      <p>{t("header")}</p>
  );
}
