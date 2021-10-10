import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context.js";
import AddressFormPres from "./AddressFormPres.js";

export default function AddressForm({ setFinalInfoshown, setLoading }) {
  const [formData, setFormData] = useState({
    city: "",
    street: "",
    building: "",
    flat: "",
    phone: "",
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { setCard, setOrderedCard } = useGlobalContext();

  useEffect(() => {
    return () => {
      setOrderSubmitted(false);
      setFormSubmitted(false);
    };
  }, []);

  const handleInputChange = (e) => {
    const changeProperty = e.target.id;
    setFormData((prevData) => {
      return { ...prevData, [changeProperty]: e.target.value };
    });
  };

  const checkIfFormFilled = () => {
    let flag = true;
    for (let value in formData) {
      if (formData[value].length === 0) {
        flag = false;
      }
    }
    return flag;
  };

  const submitOrder = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const ifFormFilled = checkIfFormFilled();
    if (ifFormFilled) {
      setOrderSubmitted(true);
      setLoading(true);
      setTimeout(() => {

        setFinalInfoshown(true);
        setCard([]);
        setOrderedCard([]);
        setLoading(false);
      }, 3000);
    } else {
      setOrderSubmitted(false);
    }
  };

  return (
    <AddressFormPres
      checkIfFormFilled={checkIfFormFilled}
      formData={formData}
      handleInputChange={handleInputChange}
      orderSubmitted={orderSubmitted}
      formSubmitted={formSubmitted}
      submitOrder={submitOrder}
    />
  );
}
