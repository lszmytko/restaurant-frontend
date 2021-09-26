import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const CustomerData = ({ setLoading, loading }) => {
  // Getting the user data
  const { userInfo } = useGlobalContext();

  const [flatNumber, setFlatNumber] = useState("");
  const [phone, setPhone] = useState(phone);
  const [name, setName] = useState(name);
  const [lastName, setLastName] = useState(lastName);
  const [street, setStreet] = useState(street);
  const [id, setId] = useState(id);
  const [error, setError] = useState({
    message: "",
  });
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    const { flatNumber, phone, name, lastName, street, id } = userInfo;
    setLastName(lastName);
    setFlatNumber(flatNumber);
    setId(id);
    setStreet(street);
    setName(name);
    setPhone(phone);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Check if all fields filled
    if (
      !lastName.length ||
      !flatNumber.length ||
      !street.length ||
      !name.length ||
      !phone.length
    ) {
      setError({
        message: "Wypełnij wszystkie pola!",
      });
      return;
    }

    setLoading(true);

    try {
      console.log("przzepre");
      const response = await axios.put(`https://restaurant-site-backend.herokuapp.com/update/${id}`, {
        flatNumber,
        phone,
        name,
        lastName,
        street,
      });

      setLoading(false);
      setIsDataChanged(true);
    } catch (error) {
      setError({
        message: "Coś poszło nie tak...",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFlatNumberChange = (e) => {
    setFlatNumber(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Cancelling data changed info
  useEffect(() => {
    if (isDataChanged) {
      setTimeout(() => {
        setIsDataChanged(false);
      }, 3000);
    }
  }, [isDataChanged]);

  return (
    <Wrapper>
      <h3>Twoje dane</h3>
      <div className="form-container">
        <form action="">
          <div className="inputDiv">
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => handleNameChange(e)}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="lastName">Nazwisko</label>
            <input
              type="text"
              value={lastName}
              name="lastName"
              onChange={(e) => handleLastNameChange(e)}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="street">Ulica</label>
            <input
              type="text"
              value={street}
              name="street"
              onChange={(e) => handleStreetChange(e)}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="flatNumber">Numer mieszkania</label>
            <input
              type="text"
              value={flatNumber}
              name="flatNumber"
              onChange={(e) => handleFlatNumberChange(e)}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="phone">Numer telefonu</label>
            <input
              type="text"
              value={phone}
              name="phone"
              onChange={(e) => handlePhoneChange(e)}
            />
          </div>
          <button
            type="submit"
            onClick={(e) => handleUpdate(e)}
            className="btn btn-update"
          >
            Zaktualizuj dane
          </button>
          {error.message.length ? <p>{error.message}</p> : null}
        </form>
      </div>
      {loading ? <p className="loading">Loading...</p> : null}
      {isDataChanged ? (
        <p className="updated">Dane zostały zaktualizowane</p>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    text-align: center;
  }

  input {
    border-radius: var(--radius);
    padding: 0.25rem;
  }
  input:focus {
    border: 0.25rem solid var(--clr-primary-5);
    border-radius: var(--radius);
  }

  label {
    margin-bottom: 0.5rem;
  }

  h3 {
    text-align: center;
  }

  .inputDiv {
    padding: 0.5rem 0;
    display: grid;
  }

  button {
    margin-top: 1rem;
    padding: 1rem 0.5rem;
    width: 100%;
  }

  .form-container {
    display: flex;
    justify-content: center;
  }

  form {
    width: 90%;
  }

  .loading {
    text-align: center;
    color: red;
  }

  .updated {
    text-align: center;
    color: green;
  }

  .btn-update {
    margin-bottom: 1rem;
  }

  input:placeholder {
    color: red;
  }
`;

export default CustomerData;
