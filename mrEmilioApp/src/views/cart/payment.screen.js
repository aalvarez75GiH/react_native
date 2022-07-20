import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Platform } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../infraestructure/typography/text.component";
import { Text as MyText } from "react-native";
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
  OrderInfoContainer,
  OrderInfoDesc,
  OrderInfoAmounts,
} from "./cart.elements";

import { CreditCardInputComponent } from "./credit-card-input.component";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  height: auto;
  align-items: center;
`;

export const PaymentView = () => {
  const { cart, sum, companyInfo } = useContext(CartContext);
  console.log("this is companyInfo:", companyInfo);
  const isAndroid = Platform.OS === "android";

  //   const estimatedTaxToBeCollected = estimatedTax.toFixed(2);

  //   **********  Math Calculations *********************
  const shippingAndHandling_fee =
    companyInfo.shippingAndHandling_fee.toFixed(2);
  const discount = companyInfo.discount.toFixed(2);

  const totalBeforeTaxesSum =
    sum + companyInfo.shippingAndHandling_fee - companyInfo.discount;

  const estimatedTaxTo =
    ((companyInfo.tax_fee / 100) * totalBeforeTaxesSum) / 100;

  const estimatedTaxToBeCollected = estimatedTaxTo.toFixed(2);

  const total = totalBeforeTaxesSum + estimatedTaxTo;
  const total_order = total.toFixed(2);
  //   //   *****************************************************

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
                Place your order ({cart.length}
                {cart.length > 1 ? "  items" : "  item"})
              </Text>
            </CartBuyProductButton>
          </CartViewHeader>
          <OrderInfoContainer>
            <OrderInfoDesc>
              <Spacer position="bottom" size="medium">
                <Text variant="label">items ({cart.length}):</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">Shipping & handling:</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">Mr Emilio Discount:</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">Total before taxes:</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">Estimated tax to be collected:</Text>
              </Spacer>
              <Spacer position="top" size="medium">
                <MyText style={{ fontWeight: "500", fontSize: 18 }}>
                  Order Total:
                </MyText>
              </Spacer>
            </OrderInfoDesc>
            <OrderInfoAmounts>
              <Spacer position="top" size="medium" />
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${sum}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${shippingAndHandling_fee}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">-${discount}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${totalBeforeTaxesSum}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${estimatedTaxToBeCollected}</Text>
              </Spacer>
              <Spacer position="top" size="medium">
                {/* <Text variant="labelBold">Order Total:</Text> */}
                <MyText style={{ fontWeight: "500", fontSize: 18 }}>
                  ${total_order}
                </MyText>
              </Spacer>
            </OrderInfoAmounts>
          </OrderInfoContainer>
          <CartViewFooter>
            <Spacer position="bottom" size="large" />
            <Spacer position="left" size="large">
              <MyText
                variant="button_caption"
                style={{ fontWeight: "500", fontSize: 18 }}
              >
                Your payment method
              </MyText>
            </Spacer>
            <Spacer position="bottom" size="large" />
            <CreditCardInputComponent />
          </CartViewFooter>
        </ScrollView>
      </SafeArea>
    </>
  );
};
