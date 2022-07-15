import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CreditCardInputComponent } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-Info-card";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);

  console.log(cart);
  if (!restaurant || !cart.length) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum}</Text>
        </Spacer>
        <CreditCardInputComponent />
      </ScrollView>
    </SafeArea>
  );
};
