import React from "react";
import { useGlobalContext } from "../../context/context";
import LogOutPres from "./LogOutPres";

const LogOut = () => {
  const { userInfo, setUserInfo } = useGlobalContext();

  const handleLogOut = () => {
    console.log("klikniete");
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
  };

  return <LogOutPres handleLogOut={handleLogOut} />;
};

export default LogOut;
