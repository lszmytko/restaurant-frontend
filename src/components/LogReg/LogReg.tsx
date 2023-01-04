import React, { useState } from "react";

import { useLogRegContext } from "../../context/logregcontext";
import LoginComponent from "../LoginComponent/LoginComponent";
import LogRegChoice from "../LogRegChoice/LogRegChoice";
import RegisterComponent from "../RegisterComponent";

// Component to show login or regsiter option depending on the choice of client
const LogReg = () => {
  const { logRegOption } = useLogRegContext();

  return (
    <div>
      {logRegOption.choice === "before" ? <LogRegChoice /> : null}
      {logRegOption.choice === "login" ? <LoginComponent /> : null}
      {logRegOption.choice === "register" ? <RegisterComponent /> : null}
    </div>
  );
};

export default LogReg;
