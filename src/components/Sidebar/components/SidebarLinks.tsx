import React from "react";
import { Link } from "react-router-dom";

export const SidebarLinks = () => (
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
);
