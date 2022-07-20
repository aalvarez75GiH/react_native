import React, { useContext } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Platform, TouchableOpacity } from "react-native";

import { Text } from "../../infraestructure/typography/text.component";
import { Text as IosBoldText } from "react-native";
import { SafeArea } from "../../global_components/safe-area.component";
import { CartContext } from "../../infraestructure/services/cart/cart.context";
import { Spacer } from "../../global_components/optimized.spacer.component";
import myImage from "../../../assets/pictures/ui/3741735_bussiness_ecommerce_marketplace_onlinestore_sotore_icon.png";
import myImage2 from "../../../assets/pictures/ui/delivery_512.png";

import {
  CartViewHeader,
  DeliveryTypeContainer,
  DeliveryType,
  DeliveryImage,
} from "./cart.elements";

import { CreditCardInputComponent } from "./credit-card-input.component";
import { Navigation } from "../../infraestructure/navigation";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  height: auto;
  align-items: center;
`;

export const DeliveryTypeView = ({ navigation }) => {
  const { deliveryType, changingDeliveryType } = useContext(CartContext);
  //   console.log("this is companyInfo:", companyInfo);
  const isAndroid = Platform.OS === "android";

  return (
    <>
      <SafeArea>
        <ScrollView>
          <CartViewHeader>
            <Spacer position="left" size="extraLarge">
              <IosBoldText style={{ fontWeight: "500", fontSize: 18 }}>
                How do you want to get your product?
              </IosBoldText>
            </Spacer>
          </CartViewHeader>
          <Spacer position="top" size="large"></Spacer>
          <DeliveryTypeContainer>
            <DeliveryType
              onPress={() => {
                changingDeliveryType("pickup");
                navigation.navigate("My payment");
              }}
            >
              <DeliveryImage source={myImage} />
              <Text variant="label">Pickup</Text>
            </DeliveryType>

            <DeliveryType
              onPress={() => {
                changingDeliveryType("delivery");
                navigation.navigate("My payment");
              }}
            >
              <DeliveryImage source={myImage2} />
              <Text variant="label">Delivery</Text>
            </DeliveryType>
          </DeliveryTypeContainer>
          {/* <OrderInfoContainer>
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
                <IosBoldText style={{ fontWeight: "700", fontSize: 18 }}>
                  ${total_order}
                </IosBoldText>
              </Spacer>
            </OrderInfoAmounts>
          </OrderInfoContainer> */}
          {/* <CartViewFooter>
            <Spacer position="bottom" size="large" />
            <Spacer position="left" size="large">
              <IosBoldText style={{ fontWeight: "500", fontSize: 18 }}>
                Your payment method
              </IosBoldText>
            </Spacer>
            <Spacer position="bottom" size="large" />
            <CreditCardInputComponent />
          </CartViewFooter> */}
        </ScrollView>
      </SafeArea>
    </>
  );
};
