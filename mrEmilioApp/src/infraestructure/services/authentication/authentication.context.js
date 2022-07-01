import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest, registerRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const onLogin = (email, password) => {
    console.log("email and password:", email, password);
    setIsLoading(true);
    loginRequest(email, password)
      .then((data) => {
        setIsLoading(false);
        setResponse(data.user);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  //   console.log("Response from firebase:", response);
  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      console.log("Passwords do not match...");
      return;
    }
    registerRequest(email, password)
      .then((data) => {
        setResponse(data.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onLogOut = () => {
    setResponse(null);
    firebase
      .auth()
      .signOut()
      .then(() => {
        setResponse(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!response,
        response,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
