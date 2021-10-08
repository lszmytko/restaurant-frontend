import React from "react";

const DishCardPres = ({
  name,
  image,
  increaseQuantity,
  price,
  quantity,
  decreaseQuantity,
  visible,
  addToBasket,
  element,
}) => {
  return (
    <div className="DishCard">
      <div ref={element} className={!visible && "test"}>
        <img src={image} alt={name} />
        <article className="cardInfo">
          <h4>{name}</h4>
          <div className="cardInfo_options">
            <p>{price}</p>
            <p className="quantity">Ilość: {quantity}</p>
            <div className="cardInfo_choice">
              <button onClick={increaseQuantity} className="plus-minus-button">
                <i className="fas fa-plus"></i>
              </button>
              <button
                disabled={quantity === 0 ? true : false}
                onClick={decreaseQuantity}
                className="plus-minus-button"
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </div>
          {quantity > 0 && (
            <button
              className="btn"
              onClick={() =>
                addToBasket({
                  image,
                  price,
                  name,
                  quantity,
                })
              }
            >
              dodaj do zamówienia
            </button>
          )}
        </article>
      </div>
    </div>
  );
};

export default DishCardPres;
