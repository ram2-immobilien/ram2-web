import "./OrderFilter.css";
import React from "react";

type OrderOption = {
  value: string;
  label: string;
};

type OrderFilterProps = {
  selectedOrder: string;
  setSelectedOrder: React.Dispatch<React.SetStateAction<string>>;
  orderOptions: OrderOption[];
  label: string;
};

function OrderFilter({
  selectedOrder,
  setSelectedOrder,
  orderOptions,
  label,
}: OrderFilterProps) {
  return (
    <div className="order-filter">
      <label htmlFor="order-select" className="order-filter__label">
        {label}
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
    </div>
  );
}

export default OrderFilter;