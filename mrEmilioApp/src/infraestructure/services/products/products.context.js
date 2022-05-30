import React, { useEffect, useState, createContext, useMemo } from "react";

import {
  productsRequest,
  restaurantsRequest,
  restaurantsInfoTransformed,
} from "./products.service";

export const ProductsContext = createContext();
export const RestaurantContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      productsRequest()
        .then((productsResult) => {
          setIsLoading(false);
          setProducts(productsResult);
          console.log(products);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };

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
    retrieveProducts();
    retrieveRestaurants();
  }, []);

  console.log("this is products:", products);
  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        restaurants,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
