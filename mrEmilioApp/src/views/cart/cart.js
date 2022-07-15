import React, { useContext } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { List } from "react-native-paper";

import { Text } from "../../infraestructure/typography/text.component";
import { SafeArea } from "../../global_components/safe-area.component";
import { CartContext } from "../../infraestructure/services/cart/cart.context";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductCartItem } from "./product.cart.Item";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  background-color: #eeeeee;
  flex: 1;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export const CartView = () => {
  const { cart, sum } = useContext(CartContext);
  return (
    <>
      <SafeArea>
        <ScrollView>
          <Spacer position="top" size="large" />
          <AccountContainer>
            {cart.map((item) => {
              return <ProductCartItem item={item} key={item.id} />;
            })}
          </AccountContainer>
          <Spacer position="left" size="large">
            <Text>Total: {sum}$</Text>
          </Spacer>
        </ScrollView>
      </SafeArea>
    </>
  );
};
