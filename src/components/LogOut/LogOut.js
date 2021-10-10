import React from "react";
import { useGlobalContext } from "../../context/context";
import LogOutPres from "./LogOutPres";

const LogOut = () => {
  const { userInfo, setUserInfo } = useGlobalContext();

  const handleLogOut = () => {
    setUserInfo((prevUser) => {
      return {
        userId: "",
        isLogged: false,
        name: "",
        email: "",
        password: "",
        flatnumber: "",
        phone: "",
      };
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user")
  };

  return <LogOutPres handleLogOut={handleLogOut} />;
};

export default LogOut;
