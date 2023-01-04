import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { useLogRegContext } from "../../context/logregcontext";
import RegisterComponentPres from "./RegisterComponentPres";
import validator from "validator";

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
  const [error, setError] = useState({
    password: "",
    isEverythingFilled: "",
    callToApi: "",
    email: "",
    isEmail: "",
    isPhone: ""
  });

  const { name, lastName, email, street, flatNumber, password, phone } =
    registerData;

  const { setLoading, loading, setLogRegOption, handleBackToChoice } =
    useLogRegContext();

  const handleRegisterData = (e, data: keyof typeof registerData) => ({
    ...registerData,
    [data]: e.target.value
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError({
      password: "",
      isEverythingFilled: "",
      callToApi: "",
      email: "",
      isEmail: "",
      isPhone: ""
    });

    if (!name || !lastName || !email || !street || !flatNumber || !phone) {
      setError((prevError) => ({
        ...prevError,
        isEverythingFilled: "Fill in everything"
      }));
      return;
    }
    if (password.length < 8 && password.length) {
      setError((prevError) => ({
        ...prevError,
        password: "password too short"
      }));
      return;
    }

    if (!validator.isEmail(email)) {
      setError((prevError) => ({
        ...prevError,
        isEmail: "wrong email format"
      }));
      return;
    }

    if (!validator.isMobilePhone(phone, "pl-PL")) {
      setError((prevError) => ({
        ...prevError,
        isPhone: "wrong phone number format"
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://restaurant-site-api.herokuapp.com/users/register",
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
        setLoading(false);
        setError((prevError) => ({
          ...prevError,
          email: "Email already exists"
        }));
        // To stop the else of the fucntion
        return;
      }
      setLogRegOption({
        choice: "before"
      });
      setLoading(false);
    } catch (error) {
      setError({
        ...error,
        callToApi: "Ups! Coś poszło nie tak!"
      });
      setLoading(false);
    }
  };

  return (
    <RegisterComponentPres
      handleRegisterData={handleRegisterData}
      registerData={registerData}
      handleRegister={handleRegister}
      handleBackToChoice={handleBackToChoice}
      error={error}
      loading={loading}
    />
  );
};

export default RegisterComponent;
