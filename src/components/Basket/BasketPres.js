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
    <Wrapper>
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
                Zamów
              </Link>
            </button>
            <button className="removeAll" onClick={removeAll}>
              usuń wszystko
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .basket {
    position: fixed;
    right: 2rem;
    top: 0.9375rem;
    color: var(--clr-primary-3);
    font-size: 2rem;
    cursor: pointer;
  }

  .basket-in-nav {
    color: var(--clr-primary-3);
    font-size: 2rem;
    cursor: pointer;
  }

  .basket:hover {
    color: var(--clr-primary-5);
  }

  .basket-div {
    min-height: 20rem;
    min-width: 20rem;
    max-width: 30rem;
    background: var(--clr-primary-3);
    top: 0;
    right: 0;
    position: fixed;
    z-index: 10;
    padding: 1rem 1rem 0;
    border-bottom-left-radius: 20px;
    transition: var(--transition);
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    color: white;
  }

  .basket-div i {
    color: var(--clr-primary-3);
  }

  .basket-div p {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: var(--spacing);
    text-align: center;
  }

  .basket-div-open {
    transform: translateX(0);
  }

  .basket-div-closed {
    transform: translateX(100%);
  }

  .basket-div-close-btn {
    text-align: right;
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 0.75rem;
  }
  .basket-div-close-btn i {
    cursor: pointer;
    color: var(--clr-primary-8);
  }

  .order-or-remove {
    display: flex;
  }

  .order-or-remove button {
    width: 50%;
    text-transform: capitalize;
    color: white;
    letter-spacing: 0.15rem;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .order {
    background: var(--clr-primary-4);
  }

  .order a {
    color: white;
    display: block;
    width: 100%;
    height: 100%;
  }

  .removeAll {
    background: var(--clr-primary-2);
  }

  .total-value {
    color: var(--clr-primary-6);
    margin-top: 1rem;
  }

  .basket-in-nav {
    position: static;
  }

  @media screen and (min-width: 768px) {
    .basket {
      font-size: 2.5rem;
    }
  }
`;

export default BasketPres;
