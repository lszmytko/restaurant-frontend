import React from "react";

import { maxPrice, minPrice } from "../../../data/data";

const FilterPrice = ({ value, changePriceCriteria }) => {
  return (
    <div className="price-form">
      <div className="price-form-container">
        <label htmlFor="price" className="price-label">
          <p className="filter-title">price</p>
        </label>
        <h4>{value.toFixed(2)}</h4>
        <input
          type="range"
          max={maxPrice}
          min={minPrice}
          id="price"
          step="0.1"
          className="rangeBar"
          value={value}
          onChange={(e) => changePriceCriteria(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default FilterPrice;
