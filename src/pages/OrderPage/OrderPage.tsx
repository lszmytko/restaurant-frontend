import React, { useEffect, useState } from "react";

import { useGlobalContext } from "../../context/context.js";
import { useLogRegContext } from "../../context/logregcontext.js";
import OrderPagePres from "./OrderPagePres";
import { useHandleOrder } from "./hooks/useHandleOrder";

const DELIVERY_PRICE = 5;

// Products shown just before ordering on order page
const OrderPage = () => {
  const {
    orderedCard,
    setOrderedCard,
    userInfo,
    setIsSidebarOpen,
    isSidebarOpen
  } = useGlobalContext();
  const [finalInfoShown, setFinalInfoshown] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const { loading, setLoading } = useLogRegContext();

  const { handleOrder } = useHandleOrder();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  const removeFromEndBasket = (e) => {
    setOrderedCard((prevCard) => {
      return prevCard.filter((_, id) => {
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
    setOrderedCard((prevCard) => {
      return prevCard.map((product, index) => {
        if (parseInt(e.target.dataset.index) !== index) {
          return product;
        } else if (parseInt(e.target.dataset.index) === index) {
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

  useEffect(() => {
    calculatetotalOrder();
  });

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
