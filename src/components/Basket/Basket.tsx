import React, { useRef } from "react";

import { useGlobalContext } from "../../context/context";
import { BasketProduct } from "../";
import Decision from "./components/Decision";
import OrderValue from "./components/OrderValue";
import ClosingTag from "./components/ClosingTag";
import BasketIcon from "./components/BasketIcon";

const Basket = () => {
  const { isBasketOpen, setIsBasketOpen } = useGlobalContext();

  const toggleBasket = () => {
    setIsBasketOpen((prevState) => !prevState);
  };

  const basketClass = isBasketOpen ? "basket-div-open" : "basket-div-closed";

  return (
    <aside className="basket_container">
      {!isBasketOpen ? (
        <BasketIcon toggleBasket={toggleBasket} />
      ) : (
        <div className={`basket-div ${basketClass}`}>
          <ClosingTag toggleBasket={toggleBasket} />
          <BasketProduct />
          <OrderValue />
          <Decision />
        </div>
      )}
    </aside>
  );
};

export default Basket;
