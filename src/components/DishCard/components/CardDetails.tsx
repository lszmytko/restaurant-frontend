import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/context";

const CardDetails = ({
  name,
  price,
  image
}: {
  name: string;
  price: number;
  image: string;
}) => {
  const [quantity, setQuantity] = useState(0);

  const { isAddedModalOpen, addToBasket } = useGlobalContext();

  useEffect(() => {
    if (!isAddedModalOpen) {
      setQuantity(0);
    }
  }, [isAddedModalOpen]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity - 1;
    });
  };

  return (
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
              quantity
            })
          }
        >
          dodaj do zamówienia
        </button>
      )}
    </article>
  );
};

export default CardDetails;
