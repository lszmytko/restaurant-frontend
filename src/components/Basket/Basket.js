import styled from "styled-components";
import { useGlobalContext } from "../../context/context.js";
import React, { useRef, useEffect } from "react";
import { BasketProduct } from "../index.js";
import BasketPres from "./BasketPres.js";

const Basket = (props) => {
  const {
    isBasketOpen,
    setIsBasketOpen,
    card,
    setCard,
    calculateOrder,
    setOrderedCard,
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
