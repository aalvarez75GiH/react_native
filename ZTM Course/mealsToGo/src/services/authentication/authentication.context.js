import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (user) {
      setUser(usr);
      // setIsLoading(false);
    } else {
      console.log(usr);
      // setIsLoading(false);
    }
  });

  const onLogOut = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  const onLogin = (email, password) => {
    console.log("email and password:", email, password);
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        console.log("user from firebase:", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match...");
      return;
    }
    registerRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setError(e.toString());
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
