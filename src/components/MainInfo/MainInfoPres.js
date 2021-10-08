import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import DeliveryHours from "../DeliveryHours/DeliveryHours";
import OpeningHours from "../OpeningHours/OpeningHours";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const MainInfoPres = ({
  openingDetailsShown,
  showCurrentHours,
  openingHours,
  checkTime,
  setOpeningDetailsShown,
  deliveryDetailsShown,
  deliveryHours,
  setDeliveryDetailsShown,
}) => {
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
            <BsInfoCircle
              className="details_svg"
              onClick={() => checkTime(openingHours)}
            />
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
            <BsInfoCircle
              className="details_svg"
              onClick={() => checkTime(deliveryHours)}
            />
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

export default MainInfoPres;
