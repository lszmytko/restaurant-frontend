import React, { useState } from "react";
import styled from "styled-components";
import { useLogRegContext } from "../context/logregcontext";

// Component to choose whether client wants to log in or

const LogRegChoice = () => {
  const { LogRegOption, setLogRegOption } = useLogRegContext();

  const handleLogChoice = (e) => {
    e.preventDefault();
    setLogRegOption({
      choice: "login",
    });
  };

  const handleRegChoice = (e) => {
    e.preventDefault();
    setLogRegOption({
      choice: "register",
    });
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-logRegChoice {
    padding: 0.75rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 2.5rem;
    text-transform: none;
    font-size: 1.5rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .btn-logRegChoice {
      padding: 0.75rem;
      width: 47.5%;
    }

    form {
      display: flex;
      justify-content: space-between;
    }

    h2 {
      font-size: 2.5rem;
    }
  }
`;

export default LogRegChoice;
