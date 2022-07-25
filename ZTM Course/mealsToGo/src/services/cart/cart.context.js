import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const total = cart.reduce((acc, { price }) => {
      return (acc = acc + price / 100);
    }, 0);

    setSum(total);
  }, [cart]);

  // ******************************************************

  useEffect(() => {
    console.log(" LOADING USEEFFECT");
    if (user && user.uid) {
      loadCartByUser(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && cart.length) {
      saveCartByUser(restaurant, cart, user.uid);
    }
  }, [restaurant, cart, user]);

  const saveCartByUser = async (rst, crt, uid) => {
    try {
      console.log("save cart function working...");
      const jsonValue = JSON.stringify({ restaurant: rst, cart: crt });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (error) {
      console.log("error storing user cart:", error);
    }
  };

  const loadCartByUser = async (uid) => {
    try {
      console.log("loading cart function working...");
      const jsonValue = await AsyncStorage.getItem(`@cart-${uid}`);
      if (jsonValue !== null) {
        const { restaurant: rst, cart: crt } = JSON.parse(jsonValue);
        setRestaurant(rst);
        setCart(crt);
      }
    } catch (e) {
      console.log("error loading:", e);
    }
  };

  // **********************************************************

  const add = (item, rst) => {
    console.log(rst);
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
      return;
    }
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: add,
        clearCart,
        restaurant,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
