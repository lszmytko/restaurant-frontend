import React from "react";

import { deliveryHours } from "../../data/data";

const DeliveryHours = () => {
  return (
    <ul>
      {deliveryHours.map((item, index) => {
        const { day, hours } = item;
        return (
          <li className="details_days" key={index}>
            {day.substring(0, 3)} {hours}
          </li>
        );
      })}
    </ul>
  );
};

export default DeliveryHours;
