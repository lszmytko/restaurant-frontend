import React from "react";

import { useGlobalContext } from "../../context/context";

const BasketProduct = ({ data }) => {
  const { removeFromBasket } = useGlobalContext();
  return (
    <article className="BasketProduct">
      {data.map((product, index) => {
        const { name, price, quantity } = product;
        return (
          <div className="card-container" id={index} key={index}>
            <div className="name">{name}</div>
            <div className="value">{(price * quantity).toFixed(2)}PLN</div>
            <div className="quantity">Ilość: {quantity}</div>
            <div className="removeItem">
              <i
                className="fas fa-trash trash"
                data-index={index}
                onClick={(e) => removeFromBasket(e)}
              ></i>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default BasketProduct;
