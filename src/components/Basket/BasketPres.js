import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BasketPres = ({
  isBasketOpen,
  toggleBasket,
  BasketDiv,
  card,
  calculateOrder,
  BasketProduct,
  removeAll,
  order,
}) => {
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

const Wrapper = styled.aside``;

export default BasketPres;
