import "./OrderFilter.css";

function OrderFilter({ totalResults = 35, selectedOrder = "price", onOrderChange }) {
  const orderOptions = [
    { value: "price", label: "Precio" },
    { value: "relevance", label: "Relevancia" },
    { value: "newest", label: "Tiempo anunciado" },
    { value: "location", label: "Proximidad o ubicación" },
    { value: "size", label: "Metros o tamaño" },
    { value: "date", label: "Fecha de publicación" },
  ];

  const handleChange = (event) => {
    const newValue = event.target.value;

    if (onOrderChange) {
      onOrderChange(newValue);
    }
  };

  return (
    <div className="order-filter">
      <label htmlFor="order-select" className="order-filter__label">
        Ordenar por:
      </label>

      <select
        id="order-select"
        className="order-filter__select"
        value={selectedOrder}
        onChange={handleChange}
      >
        {orderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p className="order-filter__results">{totalResults} resultados</p>
    </div>
  );
}

export default OrderFilter;