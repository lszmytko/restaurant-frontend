import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context/context.js";
import DishCardPres from "./DishCardPres.js";

const DishCard = ({ image, price, name }) => {
  const [quantity, setQuantity] = useState(0);
  const { isAddedModalOpen, setIsAddedModalOpen, addToBasket } =
    useGlobalContext();
  const element = useRef(null);
  const [visible, setVisible] = useState(false);

  // OBSERVER

  const options = {
    rootMargin: " 0px -20px 0px 0px",
  };

  useEffect(() => {
    const elementObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { rootMargin: "-100px 0px 0px 0px" }
    );
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
    <DishCardPres
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      image={image}
      price={price}
      name={name}
      visible={visible}
      addToBasket={addToBasket}
      element={element}
    />
  );
};

export default DishCard;
