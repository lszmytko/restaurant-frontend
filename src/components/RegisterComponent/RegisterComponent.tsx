import axios from "axios";
import React, { useState } from "react";
import validator from "validator";

import { useLogRegContext } from "../../context/logregcontext";
import RegisterComponentPres from "./RegisterComponentPres";

type errors =
  | "Fill in everything"
  | "Password too short"
  | "Wrong email format"
  | "Wrong phone number format"
  | "Email already exists"
  | "Oops! Something went wrong!";

const RegisterComponent = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    street: "",
    flatNumber: "",
    password: "",
    phone: ""
  });
  const [error, setError] = useState<errors | null>(null);

  const { name, lastName, email, street, flatNumber, password, phone } =
    registerData;

  const { setLogRegOption, handleBackToChoice } = useLogRegContext();

  const handleRegisterData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setRegisterData({
      ...registerData,
      [field]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !lastName || !email || !street || !flatNumber || !phone) {
      return setError("Fill in everything");
    }
    if (password.length < 8 && password.length) {
      return setError("Password too short");
    }

    if (!validator.isEmail(email)) {
      return setError("Wrong email format");
    }

    if (!validator.isMobilePhone(phone, "pl-PL")) {
      return setError("Wrong phone number format");
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ADDRESS}/users/register`,
        {
          name,
          lastName,
          email,
          street,
          flatNumber,
          phone,
          password
        }
      );

      if (response.data.ifEmailExists) {
        return setError("Email already exists");
      }
      setLogRegOption({
        choice: "before"
      });
    } catch (error) {
      setError("Oops! Something went wrong!");
    }
  };

  return (
    <RegisterComponentPres
      handleRegisterData={handleRegisterData}
      registerData={registerData}
      handleRegister={handleRegister}
      handleBackToChoice={handleBackToChoice}
      error={error}
    />
  );
};

export default RegisterComponent;
