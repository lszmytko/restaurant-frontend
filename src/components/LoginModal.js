import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { LogReg } from ".";
import { useLogRegContext } from "../context/logregcontext";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          top: "10%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          background: "var(--clr-primary-9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
        },
      }}
    >
      <Wrapper2>
        <Wrapper>
          <LogReg />
        </Wrapper>
      </Wrapper2>
    </Modal>
  );
};

const Wrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100%;
  // text-align: center;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  i {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 3rem;
    cursor: pointer;
  }
`;

export default LoginModal;
