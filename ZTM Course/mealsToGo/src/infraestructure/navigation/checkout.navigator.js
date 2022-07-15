import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <CheckoutStack.Screen name="Main" component={CheckoutScreen} />
    </CheckoutStack.Navigator>
  );
};
