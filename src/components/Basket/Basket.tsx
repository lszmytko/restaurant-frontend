import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context.js";
import { BasketProduct } from "../";

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
    <aside className="basket_container">
      {!isBasketOpen && (
        <div className="basket" onClick={toggleBasket}>
          <i className="fas fa-shopping-basket"></i>
        </div>
      )}

      <div
        className={`basket-div ${
          isBasketOpen ? "basket-div-open" : "basket-div-closed"
        }`}
        ref={BasketDiv}
      >
        {/* Closing tag */}
        <div className="basket-div-close-btn">
          <i className="fas fa-times" onClick={toggleBasket}></i>
        </div>
        {card.length === 0 && <p>Wybierz najpierw danie!</p>}

        {/* Products */}

        <BasketProduct data={card} />

        {/* Total price calculation */}

        {card.length > 0 && (
          <div className="total-value">
            Wartość zamówienia : {calculateOrder(card)}PLN
          </div>
        )}

        {/* Decision to order or remove all */}

        {card.length > 0 && (
          <div className="order-or-remove">
            <button className="order">
              <Link to="/order" onClick={order}>
                dalej
              </Link>
            </button>
            <button className="removeAll" onClick={removeAll}>
              usuń wszystko
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Basket;
