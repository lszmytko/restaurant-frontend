import React, { useContext, useEffect, useState } from "react";
import { dishes } from "../data/data";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  // STATES

  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [card, setCard] = useLocalStorage("card", []);
  const [orderedCard, setOrderedCard] = useLocalStorage("orderedCard", []);
  const [filterCriteria, setFilterCriteria] = useState({});
  const [loading, setLoading] = useState(false);
  const [dishesDisplayed, setDishesDisplayed] = useState(dishes);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    isLogged: false,
    name: "",
    email: "",
    password: "",
    flatnumber: "",
    phone: "",
  });

  // END OF STATES

  // STARTING USEEFFECT

    useEffect(() => {
      if (card.length > 0) {
        localStorage.removeItem("card");
        localStorage.setItem("card", JSON.stringify(card));
      }
    }, [card]);

    useEffect(() => {
      // localStorage.remove();
      localStorage.setItem("orderedCard", JSON.stringify(orderedCard));
    }, [orderedCard]);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("user")));
    // console.log(Boolean(JSON.parse(localStorage.getItem("user"))) == true)
    if (Boolean(localStorage.getItem("user"))) {
      console.log('okiki')
      const user = JSON.parse(localStorage.getItem("user"));
      setUserInfo(user);
    }
  }, []);

  // useEffect(() => {
  //   if (userInfo.isLogged) {
  //     localStorage.setItem("user", JSON.stringify(userInfo));
  //   }
  // }, [userInfo]);

  // end of starting useeffect

  // Add to basket functions

  const addToBasket = (data) => {
    // wyciagniecie produktow
    const productsInBasket = card.map((product) => {
      return product.name;
    });

    // jeżeli produkt jest już w koszyku to zmieniamy quantity, jesli nie to pushujemy

    if (productsInBasket.includes(data.name)) {
      setCard((prevCard) => {
        return prevCard.map((product) => {
          if (product.name === data.name) {
            return {
              ...product,
              quantity: product.quantity + data.quantity,
            };
          } else return product;
        });
      });
    } else {
      setCard((prevCard) => {
        return [...prevCard, data];
      });
    }
    setIsAddedModalOpen(true);
  };

  // Basket remove functions

  const removeFromBasket = (e) => {
    setCard((prevCard) => {
      return prevCard.filter((product, id) => {
        return id !== parseInt(e.target.dataset.index);
      });
    });
  };

  const filterDishes = (dishes, currentDishes) => {
    let currentFilteredArray = currentDishes.filter((dish) => {
      if (
        (filterCriteria.fried === dish.fried ||
          filterCriteria.fried === "all") &&
        filterCriteria.price >= dish.price &&
        filterCriteria.cuisine.length === 0
      )
        return dish;
    });

    let resultArray = dishes.filter((dish) => {
      if (
        (filterCriteria.fried === dish.fried ||
          filterCriteria.fried === "all") &&
        filterCriteria.price >= dish.price &&
        (filterCriteria.cuisine.includes(dish.cuisine) ||
          filterCriteria.cuisine.length === 0) &&
        !currentFilteredArray.includes(dish)
      )
        return dish;
    });

    const finalArray = currentFilteredArray.concat(resultArray);

    setDishesDisplayed(finalArray);
  };

  const calculateOrder = (card) => {
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
        setUserInfo,
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
