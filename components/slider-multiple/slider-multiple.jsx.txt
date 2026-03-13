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
        onChange={(e) => setMin(e.target.value)}
      />

      <p>Máximo: {max}€</p>
      <input
        type="range"
        min="0"
        max="500"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
    </div>
  );
}

export default SliderMultiple;