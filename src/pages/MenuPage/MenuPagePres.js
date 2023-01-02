import React from "react";

import AddedItemModal from "../../components/AddedItemModal";
import DishCard from "../../components/DishCard/DishCard";
import { Filter, Sidebar, Basket } from "../../components/index";

const MenuPagePres = ({ dishesDisplayed, isAddedModalOpen }) => {
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
              <DishCard
                name={name}
                image={image}
                price={price}
                key={index}
                className="dish"
              />
            );
          })}
        </section>
      </section>
      {isAddedModalOpen && <AddedItemModal />}
    </section>
  );
};

export default MenuPagePres;
