import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Card, List } from "react-native-paper";

import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { Text } from "../../../components/typography/text.component";
import { CreditCardInputComponent } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-Info-card";
import { paymentRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      console.log("some error");
      return;
    }
    paymentRequest(card.id, 1299, name)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

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
  console.log(name);
  return (
    <SafeArea>
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <RestaurantsInfoCard restaurant={restaurant} />
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
        <NameInput
          label="Name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInputComponent
              name={name}
              onSuccess={(card) => setCard(card)}
            />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />

        <PayButton
          disabled={isLoading}
          icon="cash"
          mode="contained"
          onPress={() => {
            console.log("pay now");
            onPay();
          }}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
            disabled={isLoading}
          >
            Clear cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
