import React from "react";
import moment from "moment";

export const OrdersHistory = ({ ordersInfo }) => (
  <div className="container">
    <div className="order-headers">
      <div>Nr</div>
      <div>Cena</div>
      <div>Data zamówienia</div>
    </div>
    <div className="order-info">
      {ordersInfo.map((order, index) => {
        return (
          <article key={order.id} className="order-details-article">
            <div>
              <span className="number">{index + 1}</span>
            </div>
            <div>{order.price} zł</div>
            <div>
              {moment(new Date(order.date)).format("dddd, MMMM Do YYYY")}
            </div>
          </article>
        );
      })}
    </div>
  </div>
);
