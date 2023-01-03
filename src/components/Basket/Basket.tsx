import React, { useRef } from "react";

import { useGlobalContext } from "../../context/context.js";
import { BasketProduct } from "../";
import BasketPres from "./BasketPres";

const Basket = () => {
  const {
    isBasketOpen,
    setIsBasketOpen,
    card,
    setCard,
    calculateOrder,
    setOrderedCard
  } = useGlobalContext();

  const BasketDiv = useRef(null);

  const toggleBasket = () => {
    setIsBasketOpen((prevState) => !prevState);
  };

  const removeAll = () => {
    setCard([]);
  };

  const order = () => {
    setOrderedCard(card);
    setIsBasketOpen(false);
  };

  return (
    <BasketPres
      isBasketOpen={isBasketOpen}
      toggleBasket={toggleBasket}
      BasketDiv={BasketDiv}
      card={card}
      calculateOrder={calculateOrder}
      BasketProduct={BasketProduct}
      removeAll={removeAll}
      order={order}
    />
  );
};

export default Basket;
