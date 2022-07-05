import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest, registerRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (user) {
      setUser(usr);
    } else {
      console.log(usr);
    }
  });

  const onLogin = (email, password) => {
    console.log("email and password:", email, password);
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setIsLoading(false);
        setUser(u);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  console.log("user from firebase:", user);
  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      console.log("Passwords do not match...");
      return;
    }
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onLogOut = () => {
    setUser(null);
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
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
