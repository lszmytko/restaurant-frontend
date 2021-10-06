import React, { useState } from "react";
import styled from "styled-components";
import { useLogRegContext } from "../../context/logregcontext";
import LogRegChoicePres from "./LogRegChoicePres";

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
    <LogRegChoicePres handleLogChoice={handleLogChoice} handleRegChoice={handleRegChoice} />
  );
};



export default LogRegChoice;
