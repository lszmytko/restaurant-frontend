import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context.js";
import React from "react";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  const classes = isSidebarOpen ? "sidebar-open" : "sidebar-closed";

  return (
    <Wrapper className={classes}>
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
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 15rem;
  padding: 1rem;
  border-radius: var(--radius);
  transition: transform 0.2s linear;
  z-index: 10;

  .toggle_button {
    text-align: right;
    padding-right: 1rem;
    cursor: pointer;
    font-size: 2rem;
  }

  ul li {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  ul li a {
    color: var(--clr-primary-1);
    transition: var(--transition);
    font-size: 1.125rem;
  }

  ul li a:hover {
    color: var(--clr-primary-5);
  }

  .nav-sidebar {
    ${"" /* background: red; */}
  }

  .sidebar-pages {
    min-width: 0;
  }

  .sidebar-page {
    ${"" /* background: red; */}
  }

  @media screen and (min-width: 768px) {
    width: 15rem;
    .toggle_button {
      font-size: 2.5rem;
    }
    ul li a {
      font-size: 1.5rem;
    }
  }
`;

export default Sidebar;
