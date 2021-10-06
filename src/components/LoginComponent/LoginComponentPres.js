import React from "react";
import styled from "styled-components";

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
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    padding: 0.5rem;
    font-size: 1.25rem;
    border: 0.25rem solid var(--clr-primary-7);
    font-size: 0.75rem;
  }

  input:focus {
    border: none;
    outline: none;
  }

  button {
    width: 50%;
    background: var(--clr-primary-5);
    cursor: pointer;
    border: 0.25rem solid var(--clr-primary-4);
    font-weight: 900;
  }

  input {
    text-align: center;
    width: 48%;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }

  // BUTTONS

  .login_btn {
    width: 100%;
    border-radius: var(--radius);
    padding: 0.5rem;
    margin-top: 0.5rem;
    background: var(--clr-primary-5);
    cursor: pointer;
    border: 0.25rem solid var(--clr-primary-4);
    font-weight: 900;
  }

  .login_btn:disabled {
    cursor: auto;
    background: var(--clr-primary-8);
  }

  .backtoChoice_btn {
    background: #fffd95;
    border-color: #fffd95;
  }

  // END OF BUTTONS

  .login-fail {
    text-align: center;
    color: red;
  }

  .login-loader {
    color: green;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    input {
      font-size: 1rem;
    }
  }
`;

export default LoginComponentPres;
