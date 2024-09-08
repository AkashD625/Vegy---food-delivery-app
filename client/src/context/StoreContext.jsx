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


  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount
  }

 

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
