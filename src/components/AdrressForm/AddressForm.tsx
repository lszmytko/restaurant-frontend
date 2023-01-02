import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context.js";
import AddressFormPres from "./AddressFormPres.js";

const AddressForm = ({ setFinalInfoshown, setLoading }) => {
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

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData((prevData) => {
      return { ...prevData, [id]: value };
    });
  };

  const checkIfFormFilled = () => {
    let flag = true;
    let key: keyof typeof formData;
    for (key in formData) {
      if (formData[key].length === 0) {
        flag = false;
      }
    }
    return flag;
  };

  const submitOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
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
};

export default AddressForm;
