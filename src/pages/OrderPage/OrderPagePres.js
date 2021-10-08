import React from "react";
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
      <section className="OrderPage">
        <Sidebar />
        <div className="finalInfoShown-wrapper">
          <h2>dziękujemy za złożenie zamówienia.</h2>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="OrderPage">
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
      </section>
    );
  }

  return (
    <section className="OrderPage">
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
                          className="fas fa-plus"
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
    </section>
  );
};

export default OrderPagePres;
