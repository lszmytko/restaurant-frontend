import React, { useEffect } from "react";
import { deliveryHours, openingHours } from "../../data/data.js";
import { useGlobalContext } from "../../context/context";
import DeliveryPagePres from "./DeliveryPagePres";

const getTodayDeliveryHours = () => {
  const today = new Date().getDay();
  return deliveryHours[today].hours;
};

const getTodayOpeningHours = () => {
  const today = new Date().getDay();
  return openingHours[today].hours;
};

export default function DeliveryPage() {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);
  return (
    <DeliveryPagePres
      getTodayOpeningHours={getTodayOpeningHours}
      getTodayDeliveryHours={getTodayDeliveryHours}
    />
  );
}
