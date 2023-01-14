import React from "react";

import { useGlobalContext } from "../../../context/context";

const OrderValue = () => {
  const { card, calculateOrder } = useGlobalContext();

  if (!card.length) return null;

  return (
    <div className="total-value">
      Wartość zamówienia : {calculateOrder(card)}PLN
    </div>
  );
};

export default OrderValue;
