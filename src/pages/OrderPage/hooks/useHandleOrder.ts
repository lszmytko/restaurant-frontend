import { useState } from "react";
import axios from "axios";

import { useGlobalContext } from "../../../context/context";
import { useLogRegContext } from "../../../context/logregcontext";

export const useHandleOrder = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [finalInfoShown, setFinalInfoshown] = useState(false);

  const { setShowLoginModal } = useLogRegContext();

  const { orderedCard, userInfo } = useGlobalContext();

  const handleOrder = async (id) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ADDRESS}/placeOrder`,
        {
          dishes: orderedCard,
          price: totalValue,
          customer_id: userInfo.userId,
          date: new Date(),
          token: userInfo.accessToken
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
