import { useEffect, useState } from "react";
import React from "react";
import { deliveryHours, openingHours } from "../../data/data.js";
import MainInfoPres from "./MainInfoPres.js";

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
    <MainInfoPres
      openingDetailsShown={openingDetailsShown}
      showCurrentHours={showCurrentHours}
      openingHours={openingHours}
      checkTime={checkTime}
      setOpeningDetailsShown={setOpeningDetailsShown}
      deliveryDetailsShown={deliveryDetailsShown}
      deliveryHours={deliveryHours}
      setDeliveryDetailsShown={setDeliveryDetailsShown}
    />
  );
};

export default MainInfo;
