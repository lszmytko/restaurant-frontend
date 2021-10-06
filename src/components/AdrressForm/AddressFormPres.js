import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AddressFormPres = ({
  checkIfFormFilled,
  formData,
  handleInputChange,
  submitOrder,
  orderSubmitted,
  formSubmitted,
}) => {
  return (
    <WrapperForm>
      <h3 onClick={checkIfFormFilled}>dane kontaktowe</h3>
      <div className="address form-input">
        <label htmlFor="city">miasto</label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="street form-input">
        <label htmlFor="street">ulica</label>
        <input
          type="text"
          id="street"
          value={formData.street}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="building form-input">
        <label htmlFor="building">nr budynku</label>
        <input
          type="text"
          id="building"
          value={formData.building}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="flat form-input">
        <label htmlFor="flat">nr mieszkania</label>
        <input
          type="text"
          id="flat"
          value={formData.flat}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="phone form-input">
        <label htmlFor="phone">nr telefonu</label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="options">
        <button className="btn" onClick={submitOrder}>
          Zamów
        </button>
        <button className="btn">
          <Link to="/menu">Wróc do menu</Link>
        </button>
      </div>
      {!orderSubmitted && formSubmitted && (
        <p className="sumbitError">Wypełnij dane kontaktowe!</p>
      )}
    </WrapperForm>
  );
};

const WrapperForm = styled.form`
  background: var(--clr-primary-9);
  border-radius: var(--radius);
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h3 {
    text-align: center;
  }
  .form-input {
    display: flex;
    gap: 0.5rem;
    letter-spacing: var(--spacing);
    padding: 0.75rem 0;
    text-transform: capitalize;
  }

  .form-input label {
    font-weight: 700;
  }

  .form-input input {
    flex-grow: 1;
    border: 2px solid var(--clr-primary-3);
    border-radius: 0.5rem;
    padding: 0 0.25rem;
    color: var(--clr-primary-3);
    font-weight: 700;
  }

  .form-input input:focus {
    outline: none;
    box-shadow: 0 0 5px var(--clr-primary-3);
  }
  .options {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
  }
  .options button {
    width: 50%;
  }
  .sumbitError {
    color: red;
    margin-top: 1rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .sumbitError {
      font-size: 1.5rem;
    }
  }
`;

export default AddressFormPres;
