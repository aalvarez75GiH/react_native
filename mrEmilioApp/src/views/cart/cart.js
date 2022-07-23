import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Platform, Text as IosText } from "react-native";

import { Text } from "../../infraestructure/typography/text.component";
import { SafeArea } from "../../global_components/safe-area.component";
import { CartContext } from "../../infraestructure/services/cart/cart.context";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductCartItem } from "./product.cart.Item";
import {
  CartViewHeader,
  CartProceedButton,
  EmptyCartIconContainer,
  EmptyCartIcon,
  CartViewFooter,
} from "./cart.elements";
import { LeftButton } from "../../global_components/leftIconButton";
import { GoHomeButton } from "../../global_components/goHomeButton";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  height: auto;
  align-items: center;
`;

export const CartView = ({ navigation }) => {
  const { cart, sum, incQuantity, decQuantity, removeFromCart, clearCart } =
    useContext(CartContext);

  const isAndroid = Platform.OS === "android";

  // useEffect(() => {
  //   setOrder(cart);
  // }, [cart]);

  if (!cart.length) {
    return (
      <SafeArea>
        <EmptyCartIconContainer>
          <EmptyCartIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </EmptyCartIconContainer>
      </SafeArea>
    );
  }
  return (
    <>
      <SafeArea>
        <ScrollView>
          <CartViewHeader onPress={() => navigation.goBack()}>
            <LeftButton navigation={navigation} />
            <IosText>Continue shopping</IosText>
          </CartViewHeader>
          {/* <Spacer position="bottom" size="medium" /> */}
          <AccountContainer>
            {cart.map((item, index) => {
              return (
                <ProductCartItem
                  item={item}
                  index={index}
                  key={item.id}
                  incQuantity={incQuantity}
                  decQuantity={decQuantity}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </AccountContainer>
          <CartViewFooter>
            <Spacer position="left" size="large">
              <Text
                style={{
                  marginLeft: isAndroid ? 200 : 245,
                }}
                variant="small_title"
              >
                Subtotal: ${sum / 100}
              </Text>
            </Spacer>
            <Spacer position="top" size="extraLarge">
              <CartProceedButton
                onPress={() => navigation.navigate("Delivery")}
              >
                <Text variant="label" style={{ color: "#010606" }}>
                  Proceed to checkout ({cart.length}
                  {cart.length > 1 ? "  items" : "  item"})
                </Text>
              </CartProceedButton>
            </Spacer>
            <Spacer position="bottom" size="large" />
          </CartViewFooter>
        </ScrollView>
      </SafeArea>
    </>
  );
};
