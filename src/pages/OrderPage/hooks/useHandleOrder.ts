import { useState } from "react";
import axios from "axios";

import { useGlobalContext } from "../../../context/context";
import { useLogRegContext } from "../../../context/logregcontext";

export const useHandleOrder = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [finalInfoShown, setFinalInfoshown] = useState(false);

  const { setShowLoginModal } = useLogRegContext();

  const {
    orderedCard,
    setOrderedCard,
    userInfo,
    setIsSidebarOpen,
    isSidebarOpen
  } = useGlobalContext();

  const handleOrder = async (id) => {
    try {
      const response = await axios.post(
        "https://restaurant-site-api.herokuapp.com/placeOrder",
        {
          dishes: orderedCard,
          price: totalValue,
          customer_id: userInfo.id,
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
