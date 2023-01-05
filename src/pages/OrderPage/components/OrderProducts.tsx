import React from "react";

import { useGlobalContext } from "../../../context/context";

export const OrderProducts = ({
  increaseOrderedQuantity,
  decreaseOrderedQuantity,
  removeFromEndBasket
}) => {
  const { orderedCard } = useGlobalContext();
  return (
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
  );
};
