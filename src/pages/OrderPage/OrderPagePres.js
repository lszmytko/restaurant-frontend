import React from "react";
import styled from "styled-components";
import { Sidebar, LogReg, AddressForm } from "../../components/index";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import LoginModal from "../../components/LoginModal/LoginModal.js";

const OrderPagePres = ({
  finalInfoShown,
  loading,
  orderedCard,
  increaseOrderedQuantity,
  decreaseOrderedQuantity,
  removeFromEndBasket,
  totalValue,
  handleOrder,
  userInfo,
  DELIVERY_PRICE,
}) => {
  if (finalInfoShown) {
    return (
      <Wrapper>
        <Sidebar />
        <div className="finalInfoShown-wrapper">
          <h2>dziękujemy za złożenie zamówienia.</h2>
        </div>
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <Sidebar />
        <div className="finalInfoShown-wrapper">
          <Loader
            type="Puff"
            color={"var(--clr-primary-3)"}
            height={300}
            width={300}
            timeout={3000} //3 secs
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Sidebar />
      <header className="title">
        <h1>koszyk</h1>
        <h2>szczegóły twojego zamówienia</h2>
      </header>
      <div className="details-container">
        <section className="details">
          {orderedCard.length === 0 && (
            <h2 className="lack-of-order">brak pozycji w koszyku</h2>
          )}
          {orderedCard.length > 0 && (
            <p className="product-header">Twoje produkty :</p>
          )}
          <div className="products">
            {orderedCard.length > 0 &&
              orderedCard.map((item, index) => {
                const { name, price, quantity } = item;
                return (
                  <article key={index} className="product">
                    <h4 className="product-details">
                      <span className="number-span">{index + 1} </span>
                      <span className="span-details">
                        <span className="details-name">{name}:</span>
                        <span className="details-value">
                          {(price * quantity).toFixed(2)} PLN
                        </span>
                      </span>
                    </h4>
                    <h4>
                      <span className="quantity-span">ilość : {quantity} </span>
                      <button className="plus-minus-btn">
                        <i
                          class="fas fa-plus"
                          data-index={index}
                          onClick={(e) => increaseOrderedQuantity(e)}
                        ></i>
                      </button>
                      <button
                        className="plus-minus-btn fas fa-minus"
                        disabled={quantity === 0 ? true : false}
                        data-index={index}
                        onClick={(e) => decreaseOrderedQuantity(e)}
                      ></button>
                      <span>
                        <i
                          className="fas fa-trash-alt"
                          data-index={index}
                          onClick={(e) => removeFromEndBasket(e)}
                        ></i>
                      </span>
                    </h4>
                  </article>
                );
              })}
          </div>
          {orderedCard.length > 0 && (
            <section className="additional-data"></section>
          )}
          {orderedCard.length === 0 && (
            <Link to="/menu" className="btn back-to-menu-btn">
              Wróć do menu
            </Link>
          )}
          {orderedCard.length > 0 && (
            <div className="summary">
              <div className="underline"></div>
              <div className="summary-amount">
                <h4>Zamówienie: {totalValue} PLN</h4>
                <h4>Dostawa : {DELIVERY_PRICE} PLN</h4>
              </div>
              <div className="underline underline-2"></div>
              <h4>Razem : {totalValue + DELIVERY_PRICE} PLN</h4>
              <button className="btn order-btn" onClick={() => handleOrder()}>
                Zamów
              </button>
            </div>
          )}
          {!userInfo.isLogged && <LoginModal />}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  --clr-summary: #52006a;
  min-height: 100vh;
  background: var(--clr-primary-10);

  .details-container {
    display: flex;
    justify-content: center;
  }
  .details {
    display: inline-block;
    margin: 0 auto;
  }
  .lack-of-order {
    text-align: center;
    width: 25rem;
    margin: 3rem auto 3rem;
    line-height: 1.5;
    text-transform: none;
  }

  .lack-of-order::first-letter {
    text-transform: capitalize;
  }

  .number-span {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    background: #f38ba0;
    line-height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    text-align: center;
  }

  .product {
    margin-bottom: 1.5rem;
  }

  .product-details {
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }

  .product h4:nth-child(2) {
    text-align: center;
  }

  .products {
    max-width: 30rem;
    ${"" /* background: red; */}
    text-align: left;
    margin: 0 auto;
  }

  .product-header {
    text-align: center;
    font-size: 2rem;
    letter-spacing: var(--spacing);
    font-weight: bold;
  }

  h4 span {
    margin-left: 0.25rem;
  }

  span i {
    cursor: pointer;
    transition: var(--transition);
  }

  .span-details {
    display: flex;
    justify-content: space-between;
  }

  .details-name,
  .details-value {
    display: inline-block;
  }

  span i:hover {
    color: var(--clr-primary-5);
  }

  h4 span:nth-child(1) {
    margin-left: 0.5rem;
  }

  .back-to-menu-btn {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    width: 15rem;
    color: white;
    text-align: center;
  }

  .plus-minus-btn {
    color: var(--clr-primary-3);
    margin-right: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .plus-minus-btn:hover {
    color: var(--clr-primary-5);
  }

  .quantity-span {
    margin-right: 1rem;
  }

  button:disabled {
    color: grey;
  }

  button:disabled:hover {
    color: grey;
  }

  .summary {
    margin-top: 2rem;
    color: var(--clr-summary);
  }

  .summary h4 {
    color: var(--clr-summary);
    text-align: center;
    margin-bottom: 1rem;
  }

  .underline {
    height: 0.25rem;
    background: var(--clr-summary);
    width: 100%;
  }

  .underline-2 {
    width: 50%;
    background: #df5e5e;
  }

  .finalInfoShown-wrapper {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background: var(--clr-primary-9);
  }
  .finalInfoShown-wrapper h2 {
    text-transform: none;
    text-align: center;
  }
  .finalInfoShown-wrapper h2:first-letter {
    text-transform: capitalize;
  }

  .order-btn {
    padding: 1rem 0;
    width: 100%;
    font-size: 1rem;
    display: block;
  }
`;

export default OrderPagePres;