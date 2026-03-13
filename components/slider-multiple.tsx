"use client"

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLanguage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations, useLocale } from "next-intl";

import "./slider-mutiple.css"
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { useState } from "react";

function SliderMultiple() {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(300);

  return (
    <div>
      <h3>Rango de precio</h3>

      <p>Mínimo: {min}€</p>
      <input
        type="range"
        min="0"
        max="500"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />

      <p>Máximo: {max}€</p>
      <input
        type="range"
        min="0"
        max="500"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
    </div>
  );
}

export default SliderMultiple;