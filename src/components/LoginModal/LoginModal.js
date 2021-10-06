import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { LogReg } from "..";
import { useLogRegContext } from "../../context/logregcontext";
import LoginModalPres from "./LoginModalPres";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return <LoginModalPres isOpen={isOpen} />;
};

export default LoginModal;
