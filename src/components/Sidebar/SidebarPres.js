import React from "react";
import { Link } from "react-router-dom";

const SidebarPres = ({ isSidebarOpen, classes, setIsSidebarOpen }) => {
  return (
    <aside className={`Sidebar ${classes}`}>
      {/* Hamburger  */}
      <div
        className="toggle_button"
        onClick={() =>
          setIsSidebarOpen((prevState) => {
            return !prevState;
          })
        }
      >
        {isSidebarOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <ul className="sidebar-pages">
        <li className="sidebar-page">
          <Link to="/">start</Link>
        </li>
        <li className="sidebar-page">
          <Link to="/menu">menu</Link>
        </li>
        <li className="sidebar-page">
          <Link to="/order">zamówienie</Link>
        </li>
        <li className="sidebar-page">
          <Link to="/delivery">dostawa</Link>
        </li>
        <li className="sidebar-page">
          <Link to="/customer">twoje konto</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarPres;
