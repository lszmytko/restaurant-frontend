import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { useLogRegContext } from "../context/logregcontext";

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
    other: "",
    callToApi: "",
  });

  const { userInfo, setUserInfo } = useGlobalContext();

  const { setShowLoginModal, setLoading } = useLogRegContext();

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
    if (!name || !lastName || !email || !street || !flatNumber || !phone) {
      setError({ ...error, other: "Fill in everything" });
      return;
    }
    if (password.length < 8 && password.length) {
      setError((prevError) => {
        return { ...prevError, password: "password too short" };
      });
      return;
    }

    try {
      setError({
        password: "",
        other: "",
        callToApi: "",
      });
      const response = await axios.post(
        "https://restaurant-site-backend.herokuapp.com/users/register",
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
      console.log(response);
      setShowLoginModal(false);
      setLoading(true);
    } catch (error) {
      setError({
        ...error,
        callToApi: "Ups! Coś poszło nie tak!",
      });
      console.log("register error", error);
    }
  };

  return (
    <Wrapper>
      <form action="/">
        <h2>Zarejestruj się</h2>
        <div>
          <label htmlFor="name">Imię</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Imię"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div>
          <label htmlFor="last_name">Nazwisko</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Nazwisko"
            value={lastName}
            onChange={(e) => handleLastNameChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div>
          <label htmlFor="street">Ulica</label>
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Ulica"
            value={street}
            onChange={(e) => handleStreetChange(e)}
          />
        </div>
        <div>
          <label htmlFor="flat_number">Nr domu</label>
          <input
            type="text"
            name="flat_number"
            id="flat_number"
            placeholder="Nr domu"
            value={flatNumber}
            onChange={(e) => handleFlatNumberChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => handlePhoneChange(e)}
          />
        </div>
        <div className="buttons">
          <button
            className="register-btn btn"
            type="submit"
            onClick={(e) => handleRegister(e)}
          >
            Zarejestruj się
          </button>
        </div>
        {error.password && <p className="error-message">{error.password}</p>}
        {error.other && <p className="error-message">{error.other}</p>}
        {error.callToApi && <p className="error-message">{error.callToApi}</p>}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .error-message {
    color: red;
  }
`;

export default RegisterComponent;
