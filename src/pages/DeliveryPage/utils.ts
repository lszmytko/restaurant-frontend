import { deliveryHours, openingHours } from "../../data/data.js";

export const getTodayDeliveryHours = () => {
  const today = new Date().getDay();
  return deliveryHours[today].hours;
};

export const getTodayOpeningHours = () => {
  const today = new Date().getDay();
  return openingHours[today].hours;
};
