import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import moment from "moment";

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
      const response = await axios.post("https://restaurant-site-backend.herokuapp.com/history", {
        token: accessToken,
        id,
      });
      // parse the json of the dishes
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
  }, [userInfo]);
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
                    {moment(new Date(order.date)).format("MMM do YYYY")}
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

export default CustomerHistory;
