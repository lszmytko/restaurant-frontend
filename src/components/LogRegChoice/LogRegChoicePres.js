import React from "react";

const LogRegChoicePres = ({ handleLogChoice, handleRegChoice }) => {
  return (
    <section className="LogRegChoice">
      <h2>Musisz się zalogować</h2>
      <form action="/">
        <button
          type="submit"
          onClick={(e) => handleLogChoice(e)}
          className="btn btn-logRegChoice"
        >
          Zaloguj się
        </button>
        <button
          type="submit"
          onClick={(e) => handleRegChoice(e)}
          className="btn btn-logRegChoice"
        >
          Zarejestruj się{" "}
        </button>
      </form>
    </section>
  );
};

export default LogRegChoicePres;
