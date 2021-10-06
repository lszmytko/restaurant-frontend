import React from "react";
import styled from "styled-components";
import moment from "moment";

const CustomerHistoryPres = ({ historyLoaded, ordersInfo }) => {
  return (
    <Wrapper>
      <h3>Ostatnie zamówienia</h3>

      {historyLoaded && (
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
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .order-headers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .order-details-article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  h3 {
    text-align: center;
  }

  .container {
    display: grid;
    // grid-template-colums: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 0.5rem;
    padding: 0.5rem;
  }

  input::placeholder {
    color: grey;
  }

  .number {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--clr-primary-5);
    color: white;
    border-radius: 50%;
    text-align: center;
  }

  article {
    margin-bottom: 0.5rem;
  }
`;

export default CustomerHistoryPres;
