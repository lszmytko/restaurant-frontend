import React from "react";
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
    <form className="AddressForm">
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
    </form>
  );
};


export default AddressFormPres;
