import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Platform } from "react-native";

import { Text } from "../../infraestructure/typography/text.component";
import { SafeArea } from "../../global_components/safe-area.component";
import { CartContext } from "../../infraestructure/services/cart/cart.context";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductCartItem } from "./product.cart.Item";
import {
  CartViewHeader,
  CartBuyProductButton,
  EmptyCartIconContainer,
  EmptyCartIcon,
  CartViewFooter,
} from "./cart.elements";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  height: auto;
  align-items: center;
`;

export const CartView = () => {
  const { cart, sum, incQuantity, decQuantity } = useContext(CartContext);
  const [order, setOrder] = useState([]);

  const isAndroid = Platform.OS === "android";

  useEffect(() => {
    setOrder(cart);
  }, [cart]);

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
          <CartViewHeader>
            <CartBuyProductButton>
              <Text variant="label" style={{ color: "#010606" }}>
                Proceed to checkout ({cart.length}
                {cart.length > 1 ? "  items" : "  item"})
              </Text>
            </CartBuyProductButton>
          </CartViewHeader>
          <AccountContainer>
            {cart.map((item, index) => {
              return (
                <ProductCartItem
                  item={item}
                  index={index}
                  key={item.id}
                  incQuantity={incQuantity}
                  decQuantity={decQuantity}
                />
              );
            })}
          </AccountContainer>
          <CartViewFooter>
            <Spacer position="left" size="large">
              <Text
                style={{
                  marginLeft: isAndroid ? 220 : 265,
                }}
                variant="small_title"
              >
                Subtotal: ${sum}
              </Text>
            </Spacer>
          </CartViewFooter>
        </ScrollView>
      </SafeArea>
    </>
  );
};
