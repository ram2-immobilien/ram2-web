import "./SliderMultiple.css";

type Props = {
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;

  lowerLimit: number;
  upperLimit: number;

  step: number;
  unit?: string;
};

export default function SliderMultiple({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  lowerLimit,
  upperLimit,
  step,
  unit,
}: Props) {
  return (
    <div className="slider-wrapper">
      <p className="slider-title">
        <strong>Coste:</strong> {minValue.toLocaleString()} -{" "}
        {maxValue.toLocaleString()} {unit ?? "€"}
      </p>

      <div className="slider-container">
        {/* MIN */}
        <input
          type="range"
          min={lowerLimit}
          max={upperLimit}
          step={step}
          value={minValue}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value < maxValue) setMinValue(value);
          }}
          className="thumb thumb-left"
        />
        {/* MAX */}
        <input
          type="range"
          min={lowerLimit}
          max={upperLimit}
          step={step}
          value={maxValue}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value > minValue) setMaxValue(value);
          }}
          className="thumb thumb-right"
        />

        <div className="slider-track" />
        <div
          className="slider-range"
          style={{
            left: `${((minValue - lowerLimit) / (upperLimit - lowerLimit)) * 100}%`,
            right: `${100 - ((maxValue - lowerLimit) / (upperLimit - lowerLimit)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
