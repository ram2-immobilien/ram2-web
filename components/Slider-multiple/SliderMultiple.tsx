import "./SliderMultiple.css";
import "./PrecioMaxMin.tsx";
type Props = {
  min: number;
  max: number;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
};
export default function SliderMultiple({ min, max, setMin, setMax }: Props) {


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