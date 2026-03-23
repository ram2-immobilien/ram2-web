"use client";
import { useState } from "react";
import SliderIndividual from "@/components/SliderIndividual/SliderIndividual";

export default function Page() {

  // el estado de los sliders esta aqui
  const [habitaciones, setHabitaciones] = useState(3);
  const [baños, setBaños] = useState(2);

  return (
    <div style={{ padding: "20px" }}>

      {/* slider de habitaciones */}
      <SliderIndividual
        label="Habitaciones"
        min={0}
        max={3}
        value={habitaciones}
        onChange={setHabitaciones}
      />

      {/* slider de baños */}
      <SliderIndividual
        label="Baños"
        min={0}
        max={2}
        value={baños}
        onChange={setBaños}
      />

    </div>
  );
}