import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { useLogRegContext } from "../context/logregcontext";

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
        setUserInfo({
          id,
          name,
          phone,
          street,
          email,
          flatNumber: flatnumber,
          lastName: lastname,
          isLogged: true,
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
    <Wrapper>
      <h3>Zaloguj się</h3>
      <form>
        <div className="info">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <button
          className="login_btn"
          disabled={isButtonDisabled}
          type="submit"
          onClick={(e) => handleLogIn(e)}
        >
          Zaloguj
        </button>
        <button
          className="login_btn backtoChoice_btn"
          onClick={(e) => handleBackToChoice(e)}
          type="submit"
        >
          Wróć
        </button>
        <p className="login-fail">
          {!loginSuccesful && "Logowanie nie powiodło się"}
        </p>
        <p className="login-loader">{loading && "Ładowanie..."}</p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    padding: 0.5rem;
    font-size: 1.25rem;
    border: 0.25rem solid var(--clr-primary-7);
    font-size: 0.75rem;
  }

  input:focus {
    border: none;
    outline: none;
  }

  button {
    width: 50%;
    background: var(--clr-primary-5);
    cursor: pointer;
    border: 0.25rem solid var(--clr-primary-4);
    font-weight: 900;
  }

  input {
    text-align: center;
    width: 48%;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }

  // BUTTONS

  .login_btn {
    width: 100%;
    border-radius: var(--radius);
    padding: 0.5rem;
    margin-top: 0.5rem;
    background: var(--clr-primary-5);
    cursor: pointer;
    border: 0.25rem solid var(--clr-primary-4);
    font-weight: 900;
  }

  .login_btn:disabled {
    cursor: auto;
    background: var(--clr-primary-8);
  }

  .backtoChoice_btn {
    background: #fffd95;
    border-color: #fffd95;
  }

  // END OF BUTTONS

  .login-fail {
    text-align: center;
    color: red;
  }

  .login-loader {
    color: green;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    input {
      font-size: 1rem;
    }
  }
`;

export default LoginComponent;
