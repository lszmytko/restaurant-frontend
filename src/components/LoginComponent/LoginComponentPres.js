import React from "react";

const LoginComponentPres = ({
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  isButtonDisabled,
  handleLogIn,
  handleBackToChoice,
  loginSuccesful,
  loading,
}) => {
  return (
    <div className="LoginComponent">
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
    </div>
  );
};

export default LoginComponentPres;
