import { dishes } from "../../data/data";
import { useGlobalContext } from "../../context/context.js";
import { useEffect } from "react";
import React from "react";

import MenuPagePres from "./MenuPagePres";

const MenuPage = () => {
  const {
    isAddedModalOpen,
    setIsAddedModalOpen,
    loading,
    setLoading,
    dishesDisplayed,
    setDishesDisplayed,
    filterCriteria,
    filterDishes,
    setIsSidebarOpen,
    isSidebarOpen,
  } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  useEffect(() => {
    filterDishes(dishes, dishesDisplayed);
  }, [filterCriteria]);

  return (
    <MenuPagePres
      dishesDisplayed={dishesDisplayed}
      isAddedModalOpen={isAddedModalOpen}
    />
  );
};

export default MenuPage;
