import React, { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

import { deliveryHours, openingHours } from "../../data/data.js";
import { showCurrentHours } from "./utils";
import DeliveryHours from "../DeliveryHours";
import OpeningHours from "../OpeningHours";

const MainInfo = () => {
  const [openingDetailsShown, setOpeningDetailsShown] = useState(false);
  const [deliveryDetailsShown, setDeliveryDetailsShown] = useState(false);

  return (
    <section className="MainInfo section">
      <section className="section-center">
        <div className="info">
          <h3 className="info-title">opening hours</h3>
          <div className="underline"></div>
          <div className="details-div">
            <div className="details">
              {openingDetailsShown ? (
                <OpeningHours />
              ) : (
                <span>Today {showCurrentHours(openingHours)}</span>
              )}
            </div>
            <BsInfoCircle className="details_svg" />
            <span
              className="details_arrow"
              onClick={() =>
                setOpeningDetailsShown((prevState) => {
                  return !prevState;
                })
              }
            >
              {openingDetailsShown ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}
            </span>
          </div>
        </div>
        <div className="info">
          <h3 className="info-title">delivery hours</h3>
          <div className="underline"></div>
          <div className="details-div">
            <div className="details">
              {deliveryDetailsShown ? (
                <DeliveryHours />
              ) : (
                <span>Today {showCurrentHours(deliveryHours)}</span>
              )}
            </div>
            <BsInfoCircle className="details_svg" />
            <span
              className="details_arrow"
              onClick={() =>
                setDeliveryDetailsShown((prevState) => {
                  return !prevState;
                })
              }
            >
              {deliveryDetailsShown ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}
            </span>
          </div>
        </div>
        <div className="info">
          <h3 className="info-title">Contact</h3>
          <div className="underline"></div>
          <ul className="details">
            <li className="contact-details">573 747 222</li>
            <li className="contact-details">22 555 77 33</li>
            <li className="contact-details">restaurant@gmail.com</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default MainInfo;
