import React from "react";

const BasketIcon = ({ toggleBasket }) => {
  return (
    <div className="basket" onClick={toggleBasket}>
      <i className="fas fa-shopping-basket"></i>
    </div>
  );
};

export default BasketIcon;
