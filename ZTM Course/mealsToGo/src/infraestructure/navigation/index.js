import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  console.log("Authentication status:", isAuthenticated);
  //   return (
  //     <NavigationContainer>
  //       <AppNavigator />
  //     </NavigationContainer>
  //   );
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
