import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import { useLogRegContext } from "../context/logregcontext";
import LoginComponent from "./LoginComponent";
import LogRegChoice from "./LogRegChoice";
import RegisterComponent from "./RegisterComponent";

// Component to show login or regsiter option depending on the choice of client
const LogReg = () => {
  const { logRegOption, setLogRegOption } = useLogRegContext();

  return (
    <div>
      {logRegOption.choice === "before" && <LogRegChoice />}
      {logRegOption.choice === "login" && <LoginComponent />}
      {logRegOption.choice === "register" && <RegisterComponent />}
    </div>
  );
};

const Wrapper = styled.div``;

export default LogReg;
