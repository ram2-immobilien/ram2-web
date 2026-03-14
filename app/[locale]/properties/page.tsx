import SliderIndividual from "@/components/SliderIndividual/SliderIndividual";

export default function Page() {

    return (
        <div style={{ padding: "20px" }}>

            {/* slider de habitaciones */}
            <SliderIndividual label="Habitaciones" min={0} max={10} />

            {/* slider de baños */}
            <SliderIndividual label="Baños" min={0} max={5} />

        </div>
    );
}
