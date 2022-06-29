import React from "react";
import styled from "styled-components/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { LoginRegisterMain } from "../../views/loginRegister/loginRegisterMain.screen";
import { LoginScreen } from "../../views/loginRegister/login.screen";
import { RegisterScreen } from "../../views/loginRegister/register.screen";

const LoginRegisterStack = createStackNavigator();

export const LoginRegisterNavigator = () => {
  return (
    <LoginRegisterStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <LoginRegisterStack.Screen name="Main" component={LoginRegisterMain} />
      <LoginRegisterStack.Screen name="Login" component={LoginScreen} />
      <LoginRegisterStack.Screen name="Register" component={RegisterScreen} />
    </LoginRegisterStack.Navigator>
  );
};
