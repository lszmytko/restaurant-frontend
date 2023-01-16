import { useEffect, useState } from "react";
import axios from "axios";
import "moment/locale/pl";

import { useGlobalContext } from "../../context/context";

export const useGetCustomerHistory = () => {
  const {
    userInfo: { userId }
  } = useGlobalContext();
  const [ordersInfo, setOrdersInfo] = useState("");
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getHistory = async () => {
    const token = localStorage.getItem("token");
    console.log(typeof userId);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ADDRESS}/history`,
        {
          token,
          id: userId
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        }
      );

      console.log(response);

      const finalResponse = response.data.message.map((element) => {
        return { ...element, dishes: JSON.parse(element.dishes)[0] };
      });
      setOrdersInfo(finalResponse);
      setIsHistoryLoaded(true);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return { ordersInfo, isHistoryLoaded, error };
};
