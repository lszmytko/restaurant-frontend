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

  const getHistory = async () => {
    const token = localStorage.getItem("token");
    console.log("przeszło", token);
    console.log({ token });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ADDRESS}/history`,
        {
          token,
          userId
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        }
      );

      console.log({ response });
      // parse the json of the dishes returned
      const finalResponse = response.data.message.map((element) => {
        return { ...element, dishes: JSON.parse(element.dishes)[0] };
      });
      // Adding orders info to this.state.
      setOrdersInfo(finalResponse);
      // Changing the flag to show orders info
      setIsHistoryLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  // On mount add order history to the state
  useEffect(() => {
    getHistory();
  }, []);

  return { ordersInfo, isHistoryLoaded };
};
