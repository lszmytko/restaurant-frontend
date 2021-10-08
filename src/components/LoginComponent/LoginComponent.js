import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import { useLogRegContext } from "../../context/logregcontext";
import LoginComponentPres from "./LoginComponentPres";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { userInfo, setUserInfo } = useGlobalContext();
  const [loginSuccesful, setLoginSuccesful] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    showLoginModal,
    setShowLoginModal,
    setLogRegOption,
    handleBackToChoice,
  } = useLogRegContext();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://restaurant-site-api.herokuapp.com/users/login",
        {
          email,
          password,
        }
      );

      console.log("response", response);

      const userData = response.data.details;
      const jwtToken = response.data.jwtToken;
      if (Object.keys(userData).length) {
        const { id, name, lastname, flatnumber, phone, street } = userData;
        setUserInfo((prevUser) => {
          return {
            id,
            name,
            phone,
            street,
            email,
            flatNumber: flatnumber,
            lastName: lastname,
            isLogged: true,
          };
        });

        localStorage.setItem("token", jwtToken.token);
        setLoginSuccesful(true);
        setShowLoginModal(false);
        setLoading(false);
      } else {
        setLoginSuccesful(false);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Disable button when no value or shorter than 8
  useEffect(() => {
    if (email.length && password.length && password.length >= 8) {
      setIsButtonDisabled(false);
    } else if (!isButtonDisabled && (password.length < 8 || !email.length)) {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  

  return (
    <LoginComponentPres
      email={email}
      handleEmailChange={handleEmailChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
      isButtonDisabled={isButtonDisabled}
      handleLogIn={handleLogIn}
      handleBackToChoice={handleBackToChoice}
      loginSuccesful={loginSuccesful}
      loading={loading}
    />
  );
};

export default LoginComponent;
