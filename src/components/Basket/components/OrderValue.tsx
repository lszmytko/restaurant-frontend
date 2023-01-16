import React from "react";

import { useGlobalContext } from "../../../context/context";
import { calculateOrder } from "../../../utils/calculateOrder";

const OrderValue = () => {
  const { card } = useGlobalContext();

  if (!card.length) return null;

  return (
    <div className="total-value">
      Wartość zamówienia : {calculateOrder(card)}PLN
    </div>
  );
};

export default OrderValue;
