"use client"

import { useState } from "react";
import "./SliderMultiple.css";

export default function SliderMultiple() {

  const [min, setMin] = useState<number>(100);
  const [max, setMax] = useState<number>(300);

  function handleMinChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (value < max) {
      setMin(value);
    }
  }

  function handleMaxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (value > min) {
      setMax(value);
    }
  }

  return (
    <div className="slider-container">

      <h3>Rango de precio</h3>

      <div className="slider-values">
        <span>{min}€</span>
        <span>{max}€</span>
      </div>

      <div className="slider-inputs">
        <input
          type="range"
          min="0"
          max="500"
          value={min}
          onChange={handleMinChange}
        />

        <input
          type="range"
          min="0"
          max="500"
          value={max}
          onChange={handleMaxChange}
        />
      </div>

    </div>
  );
}