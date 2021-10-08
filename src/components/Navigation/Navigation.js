import { Link } from "react-router-dom";
import { Basket, Sidebar} from "../index";
import React from "react";
import { useGlobalContext } from "../../context/context";
 

const Navigation = ()=> {
  return (
    <nav className="Navigation">
      <div className="nav-container section-center">
        <ul className="pages">
          <li className="page">
            <Link to="/">start</Link>
          </li>
          <li className="page">
            <Link to="/menu">menu</Link>
          </li>
          <li className="page">
            <Link to="/order">zamówienie</Link>
          </li>
          <li className="page">
            <Link to="/delivery">dostawa</Link>
          </li>
          <li className="page">
            <Link to="/customer">twoje konto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
