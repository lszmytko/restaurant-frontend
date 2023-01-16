import React from "react";

const RegisterComponentPres = ({
  handleRegisterData,
  registerData,
  handleRegister,
  handleBackToChoice,
  error
}) => {
  const { lastName, email, street, flatNumber, password, phone } = registerData;

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
            value={registerData.name}
            onChange={handleRegisterData}
          />
        </div>
        <div className="registration-input-div">
          <label htmlFor="last_name">Nazwisko</label>
          <input
            type="text"
            name="lastName"
            id="last_name"
            placeholder="Nazwisko"
            value={lastName}
            onChange={handleRegisterData}
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
            onChange={handleRegisterData}
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
            onChange={handleRegisterData}
          />
        </div>
        <div className="registration-input-div">
          <label htmlFor="flat_number">Nr domu</label>
          <input
            type="text"
            name="flatNumber"
            id="flat_number"
            placeholder="Nr domu"
            value={flatNumber}
            onChange={handleRegisterData}
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
            onChange={handleRegisterData}
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
            onChange={handleRegisterData}
          />
        </div>
        <div className="buttons">
          <button
            className="registration-btn btn"
            type="submit"
            onClick={handleRegister}
          >
            Zarejestruj się
          </button>
          <button
            className=" btn backtoChoice_btn"
            type="submit"
            onClick={handleBackToChoice}
          >
            Wróć
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterComponentPres;
