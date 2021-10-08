import React from "react";
import { Link } from "react-router-dom";

const LogOutPres = ({ handleLogOut }) => {
  return (
    <aside className="LogOut">
      <Link to="/" className="LogOut" onClick={handleLogOut}>
        Wyloguj
      </Link>
    </aside>
  );
};

export default LogOutPres;
