import React, { useEffect, useState, createContext } from "react";

import { productsRequest } from "./products.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    retrieveProducts();
  }, []);

  // console.log("this is products:", products);
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
