import React from "react";

import { useLogRegContext } from "../../context/logregcontext";

const LogRegChoice = () => {
  const { setLogRegOption } = useLogRegContext();

  const handleLogRegChoice = (e, choice: "login" | "register") => {
    e.preventDefault();
    setLogRegOption({
      choice
    });
  };

  return (
    <section className="LogRegChoice">
      <h2>Musisz się zalogować</h2>
      <form action="/">
        <button
          type="submit"
          onClick={(e) => handleLogRegChoice(e, "login")}
          className="btn btn-logRegChoice"
        >
          Zaloguj się
        </button>
        <button
          type="submit"
          onClick={(e) => handleLogRegChoice(e, "register")}
          className="btn btn-logRegChoice"
        >
          Zarejestruj się{" "}
        </button>
      </form>
    </section>
  );
};

export default LogRegChoice;
