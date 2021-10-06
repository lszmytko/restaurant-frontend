import { useGlobalContext } from "../../context/context.js";
import React from "react";
import SidebarPres from "./SidebarPres.js";

const Sidebar = ({ smallScreenVisibility }) => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  const classes = isSidebarOpen
    ? `sidebar-open ${smallScreenVisibility && smallScreenVisibility}`
    : `sidebar-closed ${smallScreenVisibility && smallScreenVisibility}`;

  return <SidebarPres isSidebarOpen={isSidebarOpen} classes={classes} setIsSidebarOpen={setIsSidebarOpen} />;
};

export default Sidebar;
