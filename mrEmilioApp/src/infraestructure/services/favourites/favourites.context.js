import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { response } = useContext(AuthenticationContext);

  useEffect(() => {
    if (response && response.uid) {
      loadFavourites(response.uid);
    }
  }, [response]);

  useEffect(() => {
    if (response && response.uid && favourites.length) {
      console.log("go by save useEffect...");
      saveFavourites(favourites, response.uid);
    }
  }, [favourites, response]);

  const saveFavourites = async (value, uid) => {
    // console.log("go by here...");
    // console.log(response);
    console.log("uid:", uid);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error saving:", e);
      // saving error
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("error loading:", e);
    }
  };

  const addToFavourites = (product) => {
    setFavourites([...favourites, product]);
    saveFavourites(favourites, response.uid);
  };

  const removeFromFavourites = (product) => {
    const newFavourites = favourites.filter((x) => x.id !== product.id);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
