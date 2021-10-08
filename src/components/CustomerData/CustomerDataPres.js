import React from "react";

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
    <section className="CustomerData">
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
    </section>
  );
};

export default CustomerDataPres;
