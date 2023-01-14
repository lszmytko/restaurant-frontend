import React from "react";

import { useGlobalContext } from "../../context/context";
import { Hamburger } from "./components/Hamburger";
import { SidebarLinks } from "./components/SidebarLinks";

const Sidebar = ({
  smallScreenVisibility
}: {
  smallScreenVisibility?: string;
}) => {
  const { isSidebarOpen } = useGlobalContext();
  const classes = isSidebarOpen
    ? `sidebar-open ${smallScreenVisibility && smallScreenVisibility}`
    : `sidebar-closed ${smallScreenVisibility && smallScreenVisibility}`;

  return (
    <aside className={`Sidebar ${classes}`}>
      <Hamburger />
      <SidebarLinks />
    </aside>
  );
};

export default Sidebar;
