import React from "react";

const ClosingTag = ({ toggleBasket }) => {
  return (
    <div className="basket-div-close-btn">
      <i className="fas fa-times" onClick={toggleBasket}></i>
    </div>
  );
};

export default ClosingTag;
