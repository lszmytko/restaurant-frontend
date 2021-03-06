import React from "react";

const RegisterComponentPres = ({
  name,
  handleNameChange,
  lastName,
  handleLastNameChange,
  email,
  handleEmailChange,
  street,
  handleStreetChange,
  flatNumber,
  handleFlatNumberChange,
  password,
  handlePasswordChange,
  phone,
  handlePhoneChange,
  handleRegister,
  handleBackToChoice,
  error,
  loading,
}) => {
  return (
    <div className="RegisterComponent">
      <form className="registration-form">
        <h2 className="registration-header">Rejestracja</h2>
        <div className="registration-input-div">
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
        <div className="registration-input-div">
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
        <div className="registration-input-div">
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
        <div className="registration-input-div">
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
        <div className="registration-input-div">
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
        <div className="registration-input-div">
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
        <div className="registration-input-div">
          <label htmlFor="phone">Telefon</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefon"
            value={phone}
            onChange={(e) => handlePhoneChange(e)}
          />
        </div>
        <div className="buttons">
          <button
            className="registration-btn btn"
            type="submit"
            onClick={(e) => handleRegister(e)}
          >
            Zarejestruj się
          </button>
          <button
            className=" btn backtoChoice_btn"
            type="submit"
            onClick={(e) => handleBackToChoice(e)}
          >
            Wróć
          </button>
        </div>
        {error.password && <p className="error-message">{error.password}</p>}
        {error.isEverythingFilled && (
          <p className="error-message">{error.isEverythingFilled}</p>
        )}
        {error.callToApi && <p className="error-message">{error.callToApi}</p>}
        {error.email && <p className="error-message">{error.email}</p>}
        {error.isEmail && <p className="error-message">{error.isEmail}</p>}
        {error.isPhone && <p className="error-message">{error.isPhone}</p>}
        {loading && <p className="error-message">Loading...</p>}
      </form>
    </div>
  );
};

export default RegisterComponentPres;
