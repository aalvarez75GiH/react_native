import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { CartView } from "../../views/cart/cart";
import { DeliveryTypeView } from "../../views/cart/deliveryType.screen";
import { PaymentView } from "../../views/cart/payment.screen";

const CartStack = createStackNavigator();

export const CartNavigator = () => {
  return (
    <CartStack.Navigator
      //   headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CartStack.Screen name="My Cart" component={CartView} />
      <CartStack.Screen name="Delivery methods" component={DeliveryTypeView} />
      <CartStack.Screen name="My payment" component={PaymentView} />
    </CartStack.Navigator>
  );
};
