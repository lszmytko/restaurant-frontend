import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import DeliveryHours from "../DeliveryHours/DeliveryHours";
import OpeningHours from "../OpeningHours/OpeningHours";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const MainInfoPres = ({
  openingDetailsShown,
  showCurrentHours,
  openingHours,
  checkTime,
  setOpeningDetailsShown,
  deliveryDetailsShown,
  deliveryHours,
  setDeliveryDetailsShown
}) => {
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

export default MainInfoPres;
