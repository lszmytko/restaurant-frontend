import styled from "styled-components";
import { useGlobalContext } from "../../context/context";
import React from "react";
import BasketProductPres from "./BasketProductPres";

const BasketProduct = ({ data }) => {
  const { removeFromBasket } = useGlobalContext();
  return (
    <BasketProductPres removeFromBasket={removeFromBasket} data={data} />
  );
};



export default BasketProduct;
