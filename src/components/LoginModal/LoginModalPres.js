import React from "react";
import Modal from "react-modal";
import { LogReg } from "..";

const LoginModalPres = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          top: "5%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          background: "hsl(183, 100%, 90%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "1rem",
        },
      }}
    >
      <div className="LoginModalContainer">
        <LogReg />
      </div>
    </Modal>
  );
};


export default LoginModalPres;
