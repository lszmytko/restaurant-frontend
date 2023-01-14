import React from "react";

import { useGlobalContext } from "../../context/context";

const BasketProduct = () => {
  const { removeFromBasket, card } = useGlobalContext();

  if (!card.length) return <p>Wybierz najpierw danie!</p>;

  return (
    <article className="BasketProduct">
      {card.map((product, index) => {
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
                onClick={removeFromBasket}
              ></i>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default BasketProduct;
