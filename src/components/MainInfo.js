import styled from "styled-components";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { deliveryHours, openingHours } from "../data/data.js";
import React from "react";


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

const DeliveryHours = () => {
  return (
    <ul>
      {deliveryHours.map((item, index) => {
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

const MainInfo = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [openingDetailsShown, setOpeningDetailsShown] = useState(false);
  const [deliveryDetailsShown, setDeliveryDetailsShown] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    openingHours: false,
    deliveryHours: false,
  });

  const checkTime = (data) => {
    const currentTime = new Date();
    const day = currentTime.getDay();
    const hour =
      currentTime.getHours().length === 1
        ? `0${currentTime.getHours()}`
        : currentTime.getHours();
    const minutes =
      currentTime.getMinutes().length === 1
        ? `0${currentTime.getMinutes()}`
        : currentTime.getMinutes();
    const startHour = data[day - 1].hours.substr(0, 5);
    const endHour = data[day - 1].hours.substr(8, 5);
    console.log(`${startHour}`);
    if (
      `${hour}:${minutes}:00` > `${startHour}` &&
      `${hour}:${minutes}:00` < `${endHour}`
    ) {
      console.log("działa");
      setTooltipData((prevState) => {
        return { ...prevState, [data]: true };
      });
    } else console.log("nie działa");
  };

  const showCurrentHours = (data) => {
    const currentday = new Date().getDay();
    return data[currentday].hours;
  };

  return (
    <Wrapper className="section">
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${"" /* max-width: 1170px; */}
  margin: 0 auto;
  background: var(--clr-grey-10);

  .info {
    ${"" /* border-right: 2px solid var(--main); */}
    padding: 1rem;
    background: white;
    text-align: center;
    border-radius: var(--radius);
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .info-title {
    text-transform: uppercase;
    padding: 1rem 0;
  }

  .details-div {
    display: flex;
    align-tems: center;
    line-height: 1;
    justify-content: center;
  }

  .details_svg {
    cursor: pointer;
    margin: 0 6px;
    font-weight: bold;
  }

  .details_arrow {
    cursor: pointer;
    font-weight: bold;
  }

  .details ul li {
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .contact-details {
    list-style: none;
  }

  @media screen and (min-width: 768px) {
    .section-center {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .info {
    min-width: 300px;
  }
`;

export default MainInfo;
