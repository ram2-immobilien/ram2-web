import "./OrderFilter.css";

function OrderFilter({ totalResults, selectedOrder, setSelectedOrder, orderOptions }) {
  return (
    <div className="order-filter">
      <label htmlFor="order-select" className="order-filter__label">
        Ordenar por:
      </label>

      <select
        id="order-select"
        className="order-filter__select"
        value={selectedOrder}
        onChange={(event) => setSelectedOrder(event.target.value)}
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