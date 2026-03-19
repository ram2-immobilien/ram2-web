import { useState, useEffect } from "react";
import "./SliderMultiple.css";

export default function SliderMultiple() {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2000000);

useEffect(() => {
  if (min > max) {
    setMin(max);
  }
}, [min, max]);
  return (
    <div className="slider-wrapper">

      <p className="slider-title">
        <strong>Coste:</strong> {min.toLocaleString()} - {max.toLocaleString()} €
      </p>

      <div className="slider-container">

        <input
          type="range"
          min="0"
          max="2000000"
          value={min}
          onChange={(e) => {
  const value = Number(e.target.value);
  if (value < max) setMin(value);
}}
          className="thumb thumb-left"
        />

        <input
          type="range"
          min="0"
          max="2000000"
          value={max}
          onChange={(e) => {
  const value = Number(e.target.value);
  if (value > min) setMax(value);
}}
          className="thumb thumb-right"
        />

        <div className="slider-track" />
        <div
          className="slider-range"
          style={{
            left: `${(min / 2000000) * 100}%`,
            right: `${100 - (max / 2000000) * 100}%`
          }}
        />

      </div>

    </div>
  );
}