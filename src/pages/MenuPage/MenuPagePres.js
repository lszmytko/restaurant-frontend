import React from "react";
import styled from "styled-components";
import AddedItemModal from "../../components/AddedItemModal/AddedItemModal";
import DishCard from "../../components/DishCard/DishCard";
import { Filter, Sidebar, Basket } from "../../components/index";

const MenuPagePres = ({dishesDisplayed, isAddedModalOpen}) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  background: var(--clr-primary-10);
  .section-menu {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 576px) {
    .section-menu {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .section-menu {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .section-menu img {
    height: 15rem;
    object-fit: cover;
  }
`;

export default MenuPagePres;
