import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { CartView } from "../../views/cart/cart";
import { DeliveryTypeView } from "../../views/cart/deliveryType.screen";
import { PaymentView } from "../../views/cart/payment.screen";
import { PaymentSuccessScreen } from "../../views/cart/payment-success.screen";
import { PaymentErrorScreen } from "../../views/cart/payment-error.screen";
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
      <CartStack.Screen name="Delivery" component={DeliveryTypeView} />
      <CartStack.Screen name="My order" component={PaymentView} />
      <CartStack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
      />
      <CartStack.Screen name="PaymentError" component={PaymentErrorScreen} />
    </CartStack.Navigator>
  );
};
