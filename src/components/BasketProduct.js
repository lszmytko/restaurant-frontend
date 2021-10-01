import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import React from "react";


const BasketProduct = ({ data }) => {
  const { removeFromBasket } = useGlobalContext();
  return (
    <Wrapper>
      {data.map((product, index) => {
        const { name, price, quantity } = product;
        return (
          <div className="card-container" id={index} key={index}>
            <div className="name">{name}</div>
            <div className="value">{parseFloat(price * quantity).toFixed(2)}PLN</div>
            <div className="quantity">Ilość: {quantity}</div>
            <div className="removeItem">
              <i
                className="fas fa-trash trash"
                data-index={index}
                onClick={(e) => removeFromBasket(e)}
              ></i>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .card-container {
    display: flex;
    gap: .75rem;
    justify-content: space-between;
    font-size: 0.875rem;
    color: white;
    letter-spacing: 0.05rem;
    margin-bottom: .5 rem;
  }

  .name::first-letter {
    text-transform: capitalize;
  }

  .trash{
    cursor: pointer;
  }
`;

export default BasketProduct;