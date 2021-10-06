import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/context.js";
import axios from "axios";
import { useLogRegContext } from "../../context/logregcontext.js";
import OrderPagePres from "./OrderPagePres.js";

const DELIVERY_PRICE = 5;

// Products shown just before ordering on order page
const OrderPage = () => {
  const {
    orderedCard,
    setOrderedCard,
    userInfo,
    setIsSidebarOpen,
    isSidebarOpen,
  } = useGlobalContext();
  const [finalInfoShown, setFinalInfoshown] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const { showLoginModal, setShowLoginModal, loading, setLoading } =
    useLogRegContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  const removeFromEndBasket = (e) => {
    setOrderedCard((prevCard) => {
      return prevCard.filter((product, id) => {
        return id !== parseInt(e.target.dataset.index);
      });
    });
  };

  const increaseOrderedQuantity = (e) => {
    setOrderedCard((prevCard) => {
      return prevCard.map((product, index) => {
        if (parseInt(e.target.dataset.index) !== index) {
          return product;
        } else if (parseInt(e.target.dataset.index) === index) {
          return { ...product, quantity: product.quantity + 1 };
        }
      });
    });
  };

  const decreaseOrderedQuantity = (e) => {
    console.log(e.target);
    setOrderedCard((prevCard) => {
      return prevCard.map((product, index) => {
        if (parseInt(e.target.dataset.index) !== index) {
          return product;
        } else if (parseInt(e.target.dataset.index) === index) {
          console.log("hehehe");
          return { ...product, quantity: product.quantity - 1 };
        }
      });
    });
  };

  const calculatetotalOrder = () => {
    const value = orderedCard.reduce((total, item) => {
      return (total += item.quantity * item.price);
    }, 0);
    setTotalValue(parseFloat(value.toFixed(2)));
  };

  // Placing an order - call to api
  const handleOrder = async (id) => {
    console.log("orderedCard", orderedCard);
    console.log("price", totalValue);
    console.log("userInfo", userInfo);
    try {
      const response = await axios.post(
        "https://restaurant-site-api.herokuapp.com/placeOrder",
        {
          dishes: orderedCard,
          price: totalValue,
          customer_id: userInfo.id,
          date: new Date(),
          token: userInfo.accessToken,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("response data", response.data);
      if (response.data.success) {
        console.log("hhhh");
        setShowLoginModal(false);
        setFinalInfoshown(true);
      } else {
        setShowLoginModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Calculate orrder on every change
  useEffect(() => {
    calculatetotalOrder();
  });

  // Turn off loading component

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <OrderPagePres
      finalInfoShown={finalInfoShown}
      loading={loading}
      orderedCard={orderedCard}
      increaseOrderedQuantity={increaseOrderedQuantity}
      decreaseOrderedQuantity={decreaseOrderedQuantity}
      removeFromEndBasket={removeFromEndBasket}
      totalValue={totalValue}
      handleOrder={handleOrder}
      userInfo={userInfo}
      DELIVERY_PRICE={DELIVERY_PRICE}
    />
  );
};

export default OrderPage;
