import { useState } from "react";
import axios from "axios";

import { useGlobalContext } from "../../../context/context";
import { useLogRegContext } from "../../../context/logregcontext";
import { calculateOrder } from "../../../utils/calculateOrder";

export const useHandleOrder = () => {
  const [finalInfoShown, setFinalInfoshown] = useState(false);

  const { setShowLoginModal } = useLogRegContext();

  const {
    orderedCard,
    setOrderedCard,
    setCard,
    userInfo: { userId, accessToken }
  } = useGlobalContext();

  const totalOrderValue = calculateOrder(orderedCard);

  const handleOrder = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ADDRESS}/placeOrder`,
        {
          dishes: orderedCard,
          price: totalOrderValue,
          customer_id: userId,
          date: new Date(),
          token: accessToken.token
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        }
      );

      if (response.data.success) {
        setShowLoginModal(false);
        setFinalInfoshown(true);
        setOrderedCard([]);
        setCard([]);
      } else {
        setShowLoginModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleOrder
  };
};
