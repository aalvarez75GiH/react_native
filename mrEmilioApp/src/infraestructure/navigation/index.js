import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { LoginRegisterNavigator } from "./loginRegister.navigator";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <LoginRegisterNavigator />}
    </NavigationContainer>
  );
};
