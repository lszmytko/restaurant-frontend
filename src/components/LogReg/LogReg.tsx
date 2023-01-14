import React from "react";

import { useLogRegContext } from "../../context/logregcontext";
import LoginComponent from "../LoginComponent";
import LogRegChoice from "../LogRegChoice";
import RegisterComponent from "../RegisterComponent";

// Component to show login or regsiter option depending on the choice of client
const LogReg = () => {
  const { logRegOption } = useLogRegContext();

  return (
    <div>
      {logRegOption.choice === "before" && <LogRegChoice />}
      {logRegOption.choice === "login" && <LoginComponent />}
      {logRegOption.choice === "register" && <RegisterComponent />}
    </div>
  );
};

export default LogReg;
