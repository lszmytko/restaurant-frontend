import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../context/context";

const LogOut = () => {
  const { setUserInfo } = useGlobalContext();

  const handleLogOut = () => {
    setUserInfo({
      userId: "",
      isLogged: false,
      name: "",
      email: "",
      password: "",
      flatNumber: "",
      phone: ""
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <aside className="LogOut">
      <Link to="/" className="LogOut" onClick={handleLogOut}>
        Wyloguj
      </Link>
    </aside>
  );
};

export default LogOut;
