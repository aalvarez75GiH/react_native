import React, { useEffect, useState, createContext } from "react";

import { productsRequest } from "./products.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveProducts = () => {
    setIsLoading(true);
    productsRequest()
      .then((productsResult) => {
        setIsLoading(false);
        setProducts(productsResult);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
