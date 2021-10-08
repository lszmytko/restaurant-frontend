import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/context";
import { useLogRegContext } from "../../context/logregcontext";
import LoginComponent from "../LoginComponent/LoginComponent";
import LogRegChoice from "../LogRegChoice/LogRegChoice";
import RegisterComponent from "../RegisterComponent/RegisterComponent";

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

export default LogReg;
