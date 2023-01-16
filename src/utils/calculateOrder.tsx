import { cardData } from "../context/types";

export const calculateOrder = (card: cardData | []) => {
  if (!calculateOrder.length) return 0;

  return (card as cardData)
    .reduce((total, currentValue) => {
      return total + currentValue.price * currentValue.quantity;
    }, 0)
    .toFixed(2);
};
