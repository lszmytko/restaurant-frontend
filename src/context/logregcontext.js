import React, { useState, useContext } from "react";
import { useGlobalContext } from "./context";

const LogRegContext = React.createContext();

const LogRegContextProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [logRegOption, setLogRegOption] = useState({
    choice: "before",
  });

  // Back to choice between login or register
  const handleBackToChoice = (e) => {
    e.preventDefault();
    setLogRegOption({
      choice: "before",
    });
  };

  return (
    <LogRegContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
        loading,
        setLoading,
        logRegOption,
        setLogRegOption,
        handleBackToChoice,
      }}
    >
      {children}
    </LogRegContext.Provider>
  );
};

const useLogRegContext = () => {
  return useContext(LogRegContext);
};

export { LogRegContext, LogRegContextProvider, useLogRegContext };
