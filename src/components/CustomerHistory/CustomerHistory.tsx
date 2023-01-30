import React from "react";

import { useGetCustomerHistory } from "./useGetCustomerHistory";
import { Loader } from "./components/Loader";
import { OrdersHistory } from "./components/OrdersHistory";

const CustomerHistory = () => {
  const { ordersInfo, isHistoryLoaded, error } = useGetCustomerHistory();
  console.log(error);
  console.log({ error });
  return (
    <div className="CustomerHistory">
      <h3>Ostatnie zamówienia</h3>
      {error && <p> Something went wrong...</p>}
      {!error && isHistoryLoaded && <OrdersHistory ordersInfo={ordersInfo} />}
      {!error && !isHistoryLoaded && <Loader />}
    </div>
  );
};

export default CustomerHistory;
