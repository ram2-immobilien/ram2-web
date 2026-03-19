import { SearchInput } from "./SearchInput";

export const AdvancedFilters = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <SearchInput
          label="Propiedad"
          values={["Apartamento", "Oficina", "1+"]}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <SearchInput
          label="País"
          values={["España"]}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <SearchInput
          label="Ciudad"
          values={["Madrid", "Valencia"]}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <SearchInput
          label="Etiquetas"
          values={["Garaje", "Jardín", "1+"]}
        />
      </div>
    </div>
  );
};