import React from "react";
import { Link } from "react-router-dom";

import { Sidebar } from "../../components";
import LoginModal from "../../components/LoginModal";
import { FinalInfo } from "./components/FinalInfo";
import { OrderHeader } from "./components/OrderHeader";
import { OrderLoader } from "./components/OrderLoader";
import { OrderProducts } from "./components/OrderProducts";
import { Summary } from "./components/Summary";

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
  DELIVERY_PRICE
}) => {
  if (finalInfoShown) {
    return <FinalInfo />;
  }

  if (loading) {
    return <OrderLoader />;
  }

  return (
    <section className="OrderPage">
      <Sidebar />
      <OrderHeader />
      <div className="details-container">
        <section className="details">
          {orderedCard.length === 0 && (
            <h2 className="lack-of-order">brak pozycji w koszyku</h2>
          )}
          {orderedCard.length > 0 && (
            <p className="product-header">Twoje produkty :</p>
          )}
          <OrderProducts
            increaseOrderedQuantity={increaseOrderedQuantity}
            decreaseOrderedQuantity={decreaseOrderedQuantity}
            removeFromEndBasket={removeFromEndBasket}
          />
          {orderedCard.length > 0 && (
            <section className="additional-data"></section>
          )}
          {orderedCard.length === 0 && (
            <Link to="/menu" className="btn back-to-menu-btn">
              Wróć do menu
            </Link>
          )}
          <Summary
            totalValue={totalValue}
            deliveryPrice={DELIVERY_PRICE}
            handleOrder={handleOrder}
          />
          {!userInfo.isLogged && <LoginModal />}
        </section>
      </div>
    </section>
  );
};

export default OrderPagePres;
