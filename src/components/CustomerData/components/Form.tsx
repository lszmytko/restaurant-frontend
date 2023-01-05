import React from "react";

export const Form = ({ data, handleDataChange, handleUpdate, error }) => {
  const { name, lastName, street, flatNumber, phone } = data;

  return (
    <form action="">
      <div className="inputDiv">
        <label htmlFor="name">Imię</label>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={handleDataChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="lastName">Nazwisko</label>
        <input
          type="text"
          value={lastName}
          id="lastName"
          name="lastName"
          onChange={handleDataChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="street">Ulica</label>
        <input
          type="text"
          value={street}
          id="street"
          name="street"
          onChange={handleDataChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="flatNumber">Numer mieszkania</label>
        <input
          type="text"
          value={flatNumber}
          id="flatNumber"
          name="flatNumber"
          onChange={handleDataChange}
        />
      </div>
      <div className="inputDiv">
        <label htmlFor="phone">Numer telefonu</label>
        <input
          type="text"
          value={phone}
          id="phone"
          name="phone"
          onChange={handleDataChange}
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
  );
};
