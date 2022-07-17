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
    const total = cart.reduce((acc, { price, quantity }) => {
      console.log(price);
      return (acc = acc + (price * quantity) / 100);
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

  const incQuantity = (item) => {
    const newState = cart.map((obj) => {
      if (obj.id === item.id) {
        console.log("this is Object:", obj);
        return { ...obj, quantity: obj.quantity + 1 };
      }
      return obj;
    });
    setCart(newState);
  };

  const decQuantity = (item) => {
    const newState = cart.map((obj) => {
      if (obj.id === item.id) {
        console.log("this is Object:", obj);
        return { ...obj, quantity: obj.quantity - 1 };
      }
      return obj;
    });
    setCart(newState);
  };

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
        incQuantity,
        decQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
