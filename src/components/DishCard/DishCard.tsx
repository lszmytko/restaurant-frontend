import React from "react";

import { useObserver } from "./useOberver";
import CardDetails from "./components/CardDetails";

const DishCard = ({ image, price, name }) => {
  const { visible, element } = useObserver();

  return (
    <div className="DishCard">
      <div
        ref={element}
        className={
          !visible ? "intersection not-visible" : "intersection visible"
        }
      >
        <img src={image} alt={name} />
        <CardDetails name={name} price={price} image={image} />
      </div>
    </div>
  );
};

export default DishCard;
