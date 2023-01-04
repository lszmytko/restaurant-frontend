import React from "react";

import { openingHours } from "../../data/data.js";

const OpeningHours = () => {
  return (
    <ul>
      {openingHours.map((item, index) => {
        const { day, hours } = item;
        return (
          <li className="details_days" key={index}>
            {day.substr(0, 3)} {hours}
          </li>
        );
      })}
    </ul>
  );
};

export default OpeningHours;
