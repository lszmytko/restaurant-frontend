import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context";
import "moment/locale/pl";
import CustomerHistoryPres from "./CustomerHistoryPres";

const CustomerHistory = () => {
  // Info about the user from global context
  const { userInfo } = useGlobalContext();
  // Info about the user
  const { name, accessToken, id } = userInfo;
  // State to contain info about previous orders
  const [ordersInfo, setOrdersInfo] = useState("");
  // Flag needed to render a component only if is loaded
  const [historyLoaded, setHistoryLoaded] = useState(false);
  // Function to get the details about previous orders
  const getHistory = async () => {
    try {
      const response = await axios.post(
        "https://restaurant-site-api.herokuapp.com/history",
        {
          token: accessToken,
          id,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("response", response);
      // parse the json of the dishes returned
      const finalResponse = response.data.message.map((element) => {
        return { ...element, dishes: JSON.parse(element.dishes)[0] };
      });
      // Adding orders info to this.state.
      setOrdersInfo(finalResponse);
      // Changing the flag to show orders info
      setHistoryLoaded(true);
      console.log("info", ordersInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // On mount add order history to the state
  useEffect(() => {
    getHistory();
    console.log("opdated history");
  }, []);
  return (
    <CustomerHistoryPres
      ordersInfo={ordersInfo}
      historyLoaded={historyLoaded}
    />
  );
};

export default CustomerHistory;
