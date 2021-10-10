import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { useLogRegContext } from "../../context/logregcontext";
import RegisterComponentPres from "./RegisterComponentPres";
import validator from "validator";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({
    password: "",
    isEverythingFilled: "",
    callToApi: "",
    email: "",
    isEmail: "",
    phone: "",
  });

  const { userInfo, setUserInfo } = useGlobalContext();

  const {
    setShowLoginModal,
    setLoading,
    loading,
    setLogRegOption,
    handleBackToChoice,
  } = useLogRegContext();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleFlatNumberChange = (e) => {
    setFlatNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    //Reset error
    setError((prevError) => {
      return {
        password: "",
        isEverythingFilled: "",
        callToApi: "",
        email: "",
        isEmail: "",
        isPhone: "",
      };
    });

    if (!name || !lastName || !email || !street || !flatNumber || !phone) {
      setError((prevError) => {
        return { ...prevError, isEverythingFilled: "Fill in everything" };
      });
      return;
    }
    if (password.length < 8 && password.length) {
      setError((prevError) => {
        return { ...prevError, password: "password too short" };
      });
      return;
    }

    if (!validator.isEmail(email)) {
      setError((prevError) => {
        return { ...prevError, isEmail: "wrong email format" };
      });
      return;
    }

    if (!validator.isMobilePhone(phone, "pl-PL")) {
      setError((prevError) => {
        return { ...prevError, isPhone: "wrong phone number format" };
      });
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
          password,
        }
      );
      if (response.data.ifEmailExists) {
        setLoading(false);
        setError((prevError) => {
          return { ...prevError, email: "Email already exists" };
        });
        // To stop the else of the fucntion
        return;
      }
      setLogRegOption({
        choice: "before",
      });
      setLoading(false);
    } catch (error) {
      setError({
        ...error,
        callToApi: "Ups! Coś poszło nie tak!",
      });
      setLoading(false);
    }
  };

  return (
    <RegisterComponentPres
      name={name}
      handleNameChange={handleNameChange}
      lastName={lastName}
      handleLastNameChange={handleLastNameChange}
      email={email}
      handleEmailChange={handleEmailChange}
      street={street}
      handleStreetChange={handleStreetChange}
      flatNumber={flatNumber}
      handleFlatNumberChange={handleFlatNumberChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      phone={phone}
      handlePhoneChange={handlePhoneChange}
      handleRegister={handleRegister}
      handleBackToChoice={handleBackToChoice}
      error={error}
      loading={loading}
    />
  );
};

export default RegisterComponent;
