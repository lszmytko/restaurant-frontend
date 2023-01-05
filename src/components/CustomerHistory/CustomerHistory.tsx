import React from "react";
import "moment/locale/pl";

import { useGetCustomerHistory } from "./useGetCustomerHistory";
import { Loader } from "./components/Loader";
import { OrdersHistory } from "./components/OrdersHistory";

const CustomerHistory = () => {
  const { ordersInfo, isHistoryLoaded } = useGetCustomerHistory();
  return (
    <div className="CustomerHistory">
      <h3>Ostatnie zamówienia</h3>
      {isHistoryLoaded ? <OrdersHistory ordersInfo={ordersInfo} /> : <Loader />}
    </div>
  );
};

export default CustomerHistory;
