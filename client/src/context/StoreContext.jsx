import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (index) => {
    setCartItems((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[index] > 1) {
        newCart[index] -= 1;
      } else {
        delete newCart[index];
      }
      return newCart;
    });
  };

  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
