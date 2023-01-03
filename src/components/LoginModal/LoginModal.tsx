import React, { useState } from "react";
import Modal from "react-modal";

import { LogReg } from "../";

const styles = {
  content: {
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    background: "hsl(183, 100%, 90%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1rem"
  }
};

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} style={styles}>
      <div className="LoginModalContainer">
        <LogReg />
      </div>
    </Modal>
  );
};

export default LoginModal;
