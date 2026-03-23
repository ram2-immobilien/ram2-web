import { useRef, useEffect } from "react";
import "./SliderIndividual.css";

interface SliderIndividualProps {
  label: string;
  min: number;
  max: number;
  value: number;
  unit?: string;
  onChange: (value: number) => void;
}

// componente del slider individual
const SliderIndividual = ({ label, min, max, value, unit = "", onChange }: SliderIndividualProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  // pinta azul hasta el circulo y gris despues (usando css)
  const updateBackground = (val: number) => {
    const percentage = ((val - min) / (max - min)) * 100;
    if (inputRef.current) {
      inputRef.current.style.setProperty("--percentage", `${percentage}%`);
    }
  };

  // cuando cambia el valor actualizo el color
  useEffect(() => {
    updateBackground(value);
  }, [value]);

  return (
    <div className="slider-individual">

      {/* titulo y valor actual en la misma linea */}
      <p className="slider-individual-header">
        <label className="slider-individual-label">{label}:</label>
        <label className="slider-individual-value"> Más de {value} {unit}</label>
      </p>

      {/* la barra deslizante */}
      <input
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-individual-input"
      />

    </div>
  );
};

export default SliderIndividual;