import React, { useEffect } from "react";

import { dishes } from "../../data/data";
import { useGlobalContext } from "../../context/context";
import {
  Filter,
  Sidebar,
  Basket,
  DishCard,
  AddedItemModal
} from "../../components";

const MenuPage = () => {
  const {
    isAddedModalOpen,
    dishesDisplayed,
    filterCriteria,
    filterDishes,
    setIsSidebarOpen,
    isSidebarOpen
  } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  useEffect(() => {
    filterDishes(dishes);
  }, [filterCriteria]);

  return (
    <section className="MenuPage">
      <Sidebar />
      <Basket />
      <header className="title">
        <h1>menu</h1>
        <h2>spróbuj naszej kuchni</h2>
      </header>
      <Filter />
      <section className="dishes section-center">
        <section className="section-menu">
          {dishesDisplayed.map((dish, index) => {
            const { name, price, image } = dish;
            return (
              <DishCard name={name} image={image} price={price} key={index} />
            );
          })}
        </section>
      </section>
      {isAddedModalOpen && <AddedItemModal />}
    </section>
  );
};

export default MenuPage;
