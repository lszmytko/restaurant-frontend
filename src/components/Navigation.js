import logo from "../logo/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Basket, Sidebar } from "../components/index";
import React from "react";
import { useGlobalContext } from "../context/context";

const Navigation = ({ smallScreenVisibility }) => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  z-index: 1;
  box-shadow: 4px 4px 12px var(--clr-primary-3);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: var(--clr-white);

  .nav-container {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 100px;
  }

  .pages {
    display: none;
  }

  .pages li a {
    color: var(--clr-primary-3);
    font-weight: bold;
  }

  .pages li a:hover {
    color: var(--clr-primaty-5);
  }

  .logo-div {
    display: none;
  }

  .logo-img {
    color: var(--clr-primary-3);
  }
  
  .page {
    text-transform: uppercase;
  }

  .page h2 {
    cursor: pointer;
  }

  .nav-sidebar {
    position: static;
  }

  @media screen and (min-width: 768px) {
    .nav-container {
      padding: 0;
      width: 98%;
      margin: 0 auto;
    }

    .logo-div {
      width: 4rem;
      display: block;
    }

    .pages {
      display: flex;
      justify-content: space-between;
      color: var(--clr-primary-5);
      font-size: 1.25rem;
      width: 100%;
    }

  }

  @media screen and (min-width: 992px) {
  }
`;

export default Navigation;
