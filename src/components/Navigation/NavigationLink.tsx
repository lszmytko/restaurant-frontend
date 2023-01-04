import React from "react";
import { Link } from "react-router-dom";

export const NavigationLink = ({
  href,
  children
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className="page">
      <Link to={href}>{children}</Link>
    </li>
  );
};
