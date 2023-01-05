import React from "react";

import { useGlobalContext } from "../../../context/context";

export const Hamburger = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  return (
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
  );
};
