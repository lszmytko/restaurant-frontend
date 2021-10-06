import React from "react";
import styled from "styled-components";

const CustomerDataPres = ({
  name,
  handleNameChange,
  lastName,
  handleLastNameChange,
  street,
  handleStreetChange,
  flatNumber,
  handleFlatNumberChange,
  phone,
  handlePhoneChange,
  error,
  handleUpdate,
  loading,
  isDataChanged,
}) => {
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
    height: 2rem;
  }
  input:focus {
    border: 0.25rem solid var(--clr-primary-5);
    border-radius: var(--radius);
    outline: none;
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

export default CustomerDataPres;
