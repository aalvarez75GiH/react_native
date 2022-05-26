import React, { useEffect, useState, createContext, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsInfoTransformed,
} from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.error(error);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest("43.653225,-79.383186")
        .then(restaurantsInfoTransformed)
        .then((restaurantsResult) => {
          setIsLoading(false);
          setRestaurants(restaurantsResult);
          console.log(restaurants);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);

  console.log("this is restaurants:", restaurants);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
