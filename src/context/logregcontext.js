import React, { useState, useContext } from "react";
import { useGlobalContext } from "./context";


const LogRegContext = React.createContext();

const LogRegContextProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {userInfo} = useGlobalContext()

  return (
    <LogRegContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
        loading,
        setLoading
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
