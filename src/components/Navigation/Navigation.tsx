import React from "react";

import { NavigationLink } from "./NavigationLink";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <div className="nav-container section-center">
        <ul className="pages">
          <NavigationLink href="/">start</NavigationLink>
          <NavigationLink href="/menu">menu</NavigationLink>
          <NavigationLink href="/order">zamówienie</NavigationLink>
          <NavigationLink href="/">start</NavigationLink>
          <NavigationLink href="/customer">twoje konto</NavigationLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
