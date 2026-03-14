"use client";
import { useState } from "react";
import "./SliderIndividual.css";

// tipos que necesita el componente
interface SliderIndividualProps {
  label: string;
  min: number;
  max: number;
  unit?: string;
}

// componente del slider individual
const SliderIndividual = ({ label, min, max, unit = "" }: SliderIndividualProps) => {

  // guardo el valor actual, empieza en el maximo
  const [value, setValue] = useState(max);

  return (
    <div className="slider-individual">

      {/* titulo y valor actual en la misma linea */}
      <p className="slider-individual-header">
        <span className="slider-individual-label">{label}:</span>
        <span className="slider-individual-value"> Más de {value} {unit}</span>
      </p>

      {/* la barra deslizante */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="slider-individual-input"
      />

    </div>
  );
};

export default SliderIndividual;