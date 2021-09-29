import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/context.js";

const DishCard = ({ image, price, name }) => {
  const [quantity, setQuantity] = useState(0);
  const { isAddedModalOpen, setIsAddedModalOpen, addToBasket } =
    useGlobalContext();
  const element = useRef(null);
  const [visible, setVisible] = useState(false)

  // OBSERVER

  const options = {
    rootMargin: " 0px -20px 0px 0px",
  };

  useEffect(() => {
    const elementObserver = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setVisible(true)
      }
    }, {'rootMargin' : '-100px 0px 0px 0px'});
    if (element.current) {
      elementObserver.observe(element.current);
    }
  });

  // END OF OBSERVER

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
    <Wrapper ref={element} className={!visible && "test"}>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-10);
  text-align: center;
  transition: all 0.5s linear;
  .cardInfo {
    padding: 1rem 0.25rem;
  }

  .cardInfo_options {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .cardInfo_choice button:nth-child(1) {
    margin-right: 0.5rem;
  }

  .plus-minus-button {
    cursor: pointer;
  }

  .plus-minus-button:disabled {
    cursor: auto;
  }
`;

export default DishCard;
