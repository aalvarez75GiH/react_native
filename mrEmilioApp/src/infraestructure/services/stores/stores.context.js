import React, { useEffect, useState, createContext, useContext } from "react";

import {
  storesRequest,
  storesInfoTransformed,
  storesRequestBySearchTerm,
} from "./stores.services";
import { LocationContext } from "../../services/location/location.context";

export const StoresContext = createContext();

export const StoresContextProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location, keyword } = useContext(LocationContext);

  const retrieveStores = (locationToRetrieve) => {
    setIsLoading(true);
    setStores([]);
    setTimeout(() => {
      storesRequestBySearchTerm(keyword)
        .then(storesInfoTransformed)
        .then((storesResult) => {
          //   console.log("result:", storesResult);
          setIsLoading(false);
          setStores(storesResult);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationToString = `${location.lat},${location.lng}`;
      console.log(locationToString);
      retrieveStores(locationToString);
    }
  }, [location]);

  return (
    <StoresContext.Provider
      value={{
        stores,
        isLoading,
        error,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
};
