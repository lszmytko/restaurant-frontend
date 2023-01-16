import React from "react";

import { useGlobalContext } from "../../../context/context";

export const Summary = ({ totalValue, deliveryPrice, handleOrder }) => {
  const { orderedCard } = useGlobalContext();

  if (orderedCard.length === 0) return null;

  return (
    <div className="summary">
      <div className="underline"></div>
      <div className="summary-amount">
        <h4>Zamówienie: {totalValue} PLN</h4>
        <h4>Dostawa : {deliveryPrice} PLN</h4>
      </div>
      <div className="underline underline-2"></div>
      <h4>Razem : {totalValue + deliveryPrice} PLN</h4>
      <button className="btn order-btn" onClick={handleOrder}>
        Zamów
      </button>
    </div>
  );
};
