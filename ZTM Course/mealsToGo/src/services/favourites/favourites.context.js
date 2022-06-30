import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const saveFavourites = async (value, uid) => {
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
      //   return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error loading:", e);
      // error reading value
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
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
