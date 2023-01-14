import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../../context/context";

const Decision = () => {
  const { setIsBasketOpen, card, setCard, setOrderedCard } = useGlobalContext();

  const removeAll = () => {
    setCard([]);
  };

  const handleOrder = () => {
    setOrderedCard(card);
    setIsBasketOpen(false);
  };

  if (!card.length) return null;

  return (
    <div className="order-or-remove">
      <button className="order">
        <Link to="/order" onClick={handleOrder}>
          dalej
        </Link>
      </button>
      <button className="removeAll" onClick={removeAll}>
        usuń wszystko
      </button>
    </div>
  );
};

export default Decision;
