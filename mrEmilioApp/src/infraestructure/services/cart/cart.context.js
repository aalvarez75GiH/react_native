import React, { createContext, useState, useEffect, useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //   const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const total = cart.reduce((acc, { price }) => {
      return (acc = acc + price);
    }, 0);

    setSum(total);
  }, [cart]);

  const add = (item) => {
    console.log(item);
    // if (!restaurant || restaurant.placeId !== rst.placeId) {
    //   setRestaurant(rst);
    //   setCart([item]);
    //   return;
    // }
    setCart([...cart, item]);
  };
  console.log(cart);
  //   const clearCart = () => {
  //     setCart([]);
  //   };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: add,
        // clearCart,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
