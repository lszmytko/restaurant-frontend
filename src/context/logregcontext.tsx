import React, { useState, useContext } from "react";

import { LogRegContextType } from "./types";

const LogRegContext = React.createContext<LogRegContextType | null>(null);

const LogRegContextProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [logRegOption, setLogRegOption] = useState({
    choice: "before"
  });

  const handleBackToChoice = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLogRegOption({
      choice: "before"
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
        handleBackToChoice
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
