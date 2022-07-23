import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Platform, KeyboardAvoidingView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Text } from "../../infraestructure/typography/text.component";
import { Text as IosBoldText } from "react-native";
import { Text as SmallErrorText } from "../../infraestructure/typography/text.component";

import { SafeArea } from "../../global_components/safe-area.component";
import { CartContext } from "../../infraestructure/services/cart/cart.context";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { PaymentProcessing } from "./cart.elements";
import {
  CartViewHeader,
  PaymentInfoError,
  CartBuyProductButton,
  EmptyCartIconContainer,
  EmptyCartIcon,
  CartViewFooter,
  OrderInfoContainer,
  OrderInfoDesc,
  OrderInfoAmounts,
  NameInput,
} from "./cart.elements";

import { CreditCardInputComponent } from "./credit-card-input.component";
import { paymentRequest } from "../../infraestructure/services/cart/cart.services";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  height: auto;
  align-items: center;
`;

export const PaymentView = () => {
  const { cart, sum, companyInfo, deliveryType } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isIncomplete, setIsIncomplete] = useState(true);
  const [pi_errorMessage, setPi_errorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //   console.log("this is company info:", companyInfo);
  //   console.log("this is my Delivery Type:", deliveryType);
  const isAndroid = Platform.OS === "android";

  //   const estimatedTaxToBeCollected = estimatedTax.toFixed(2);

  //   **********  Math Calculations *********************
  const shippingAndHandling_fee =
    deliveryType === "delivery"
      ? companyInfo.shippingAndHandling_fee
      : companyInfo.pickup_fee;

  const discount = companyInfo.discount;

  const totalBeforeTaxesSum =
    deliveryType === "delivery"
      ? sum + companyInfo.shippingAndHandling_fee - companyInfo.discount
      : sum + companyInfo.pickup_fee - companyInfo.discount;

  //   const estimatedTaxTo =
  //     ((companyInfo.tax_fee / 100) * totalBeforeTaxesSum) / 100;

  const estimatedTaxTo =
    ((companyInfo.tax_fee / 100) * totalBeforeTaxesSum) / 100;
  //   console.log("estimated tax to:", estimatedTaxTo);

  const estimatedTaxToBeCollected = estimatedTaxTo / 100;
  //   console.log("estimated tax to be collected:", estimatedTaxToBeCollected);
  const total = totalBeforeTaxesSum + estimatedTaxTo;
  //   console.log("TOTAL:", total);
  const totalForStripe = Math.ceil(total);
  //   console.log("this is te money we are sending to srtripe:", totalForStripe);
  //   //   *****************************************************
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const onPay = async () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      setPi_errorMessage(true);
      return;
    }
    paymentRequest(card.id, totalForStripe, name)
      .then((response) => {
        setIsLoading(false);
        console.log("Payment response from Stripe:", response);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error response from Stripe:", err);
      });
  };

  const onSuccess = (card) => {
    setPi_errorMessage(false);
    setCard(card);
  };

  console.log("this is isInComplete#2:", isIncomplete);
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
        {isLoading && <PaymentProcessing />}
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraHeight={150}
          style={StyleSheet.container}
        >
          {/* <ScrollView> */}
          <Spacer position="top" size="large" />
          {!card && (
            <CartViewHeader>
              <CartBuyProductButton
                //   disabled={isIncomplete ? true : false}
                uppercase={false}
                onPress={() => onPay()}
                isIncomplete={isIncomplete}
              >
                <Text variant="label" style={{ color: "#010606" }}>
                  Place your order ({cart.length}
                  {cart.length > 1 ? "  items" : "  item"})
                </Text>
              </CartBuyProductButton>
            </CartViewHeader>
          )}
          {pi_errorMessage && (
            <PaymentInfoError>
              <Spacer position="left" size="large">
                <SmallErrorText variant="small_error">
                  Enter payment information
                </SmallErrorText>
              </Spacer>
            </PaymentInfoError>
          )}
          <Spacer position="top" size="large" />
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
                <IosBoldText style={{ fontWeight: "700", fontSize: 18 }}>
                  Order Total:
                </IosBoldText>
              </Spacer>
            </OrderInfoDesc>
            <OrderInfoAmounts>
              <Spacer position="top" size="medium" />
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${sum / 100}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">
                  {" "}
                  ${(shippingAndHandling_fee / 100).toFixed(2)}
                </Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">-${(discount / 100).toFixed(2)}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label"> ${totalBeforeTaxesSum / 100}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">
                  {" "}
                  ${estimatedTaxToBeCollected.toFixed(2)}
                </Text>
              </Spacer>
              <Spacer position="top" size="medium">
                {/* <Text variant="labelBold">Order Total:</Text> */}
                <IosBoldText style={{ fontWeight: "700", fontSize: 18 }}>
                  ${(total / 100).toFixed(2)}
                </IosBoldText>
              </Spacer>
            </OrderInfoAmounts>
          </OrderInfoContainer>

          <CartViewFooter>
            <Spacer position="bottom" size="large" />
            <Spacer position="left" size="large">
              <IosBoldText style={{ fontWeight: "500", fontSize: 18 }}>
                Your payment information
              </IosBoldText>
            </Spacer>
            <Spacer position="bottom" size="large" />

            <NameInput
              label="Credit card holder Full name"
              onChangeText={(value) => setName(value)}
              value={name}
            />
            <Spacer position="top" size="medium">
              {name.length > 0 && (
                <CreditCardInputComponent
                  name={name}
                  onSuccess={(response) => onSuccess(response)}
                />
              )}
            </Spacer>
            {card && (
              <Spacer position="top" size="extraLarge">
                <CartBuyProductButton
                  //   disabled={isIncomplete ? true : false}
                  uppercase={false}
                  onPress={() => onPay()}
                  isIncomplete={isIncomplete}
                >
                  <Text variant="label" style={{ color: "#010606" }}>
                    Place your order ({cart.length}
                    {cart.length > 1 ? "  items" : "  item"})
                  </Text>
                </CartBuyProductButton>
              </Spacer>
            )}
          </CartViewFooter>
          {/* </ScrollView> */}
        </KeyboardAwareScrollView>
      </SafeArea>
    </>
  );
};
