import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";
import LoginComponent from "./LoginComponent";
import LogRegChoice from "./LogRegChoice";
import RegisterComponent from "./RegisterComponent";

const LogReg = () => {
  const { userInfo } = useGlobalContext();
  //   true -> show login form, false -> show register form
  const [logOption, setLogOption] = useState({
    choice: "before",
  });

  return (
    <div>
      {logOption.choice === "before" && (
        <LogRegChoice logOption={logOption} setLogOption={setLogOption} />
      )}
      {logOption.choice === "login" && <LoginComponent />}
      {logOption.choice === "register" && <RegisterComponent />}
    </div>
  );
};

const Wrapper = styled.div``;


export default LogReg;
