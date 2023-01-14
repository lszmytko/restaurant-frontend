import React, { useContext, useEffect, useState } from "react";

import { dishes } from "../data/data";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  basketData,
  cardData,
  dishesType,
  filterCriteriaType,
  globalContextInterface
} from "./types";

const AppContext = React.createContext<globalContextInterface>(null);

const AppContextProvider = ({ children }) => {
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // TODO change fake data
  const [filterCriteria, setFilterCriteria] =
    useState<filterCriteriaType | null>(null);
  const [loading, setLoading] = useState(false);
  const [dishesDisplayed, setDishesDisplayed] = useState(dishes);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    isLogged: false,
    name: "",
    lastName: "",
    email: "",
    password: "",
    flatNumber: "",
    street: "",
    phone: ""
  });

  const [card, setCard] = useLocalStorage("card");
  const [orderedCard, setOrderedCard] = useLocalStorage("orderedCard");

  useEffect(() => {
    localStorage.removeItem("card");
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  useEffect(() => {
    localStorage.setItem("orderedCard", JSON.stringify(orderedCard));
  }, [orderedCard]);

  useEffect(() => {
    if (Boolean(localStorage.getItem("user"))) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserInfo(user);
    }
  }, []);

  useEffect(() => {
    if (userInfo.isLogged) {
      localStorage.setItem("user", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  const addToBasket = (data: basketData) => {
    const productsInBasketNames = card.map((product) => product.name);

    if (productsInBasketNames.includes(data.name)) {
      setCard((prevCard) =>
        prevCard.map((product) =>
          product.name === data.name
            ? {
                ...product,
                quantity: product.quantity + data.quantity
              }
            : product
        )
      );
    } else setCard((prevCard) => [...prevCard, data]);

    setIsAddedModalOpen(true);
  };

  const removeFromBasket = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setCard((prevCard) =>
      prevCard.filter((_, id) => id !== parseInt(e.currentTarget.dataset.index))
    );
  };

  const filterDishes = (dishes: dishesType) => {
    if (filterCriteria === null) return setDishesDisplayed(dishes);

    const filteredDishes = dishes.filter((dish) => {
      if (
        filterCriteria.price >= dish.price &&
        (filterCriteria.isFried === "all" ||
          filterCriteria.isFried === dish.isFried) &&
        (!filterCriteria.cuisine.length ||
          filterCriteria.cuisine.includes(dish.cuisine))
      )
        return true;
    });

    setDishesDisplayed(filteredDishes);
  };

  const calculateOrder = (card: cardData) => {
    return card
      .reduce((total, currentValue) => {
        return total + currentValue.price * currentValue.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <AppContext.Provider
      value={{
        isAddedModalOpen,
        setIsAddedModalOpen,
        addToBasket,
        setIsSidebarOpen,
        isSidebarOpen,
        filterDishes,
        filterCriteria,
        setFilterCriteria,
        loading,
        setLoading,
        dishesDisplayed,
        setDishesDisplayed,
        isBasketOpen,
        setIsBasketOpen,
        card,
        setCard,
        removeFromBasket,
        calculateOrder,
        orderedCard,
        setOrderedCard,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useGlobalContext, AppContext };
