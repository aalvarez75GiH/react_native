import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text } from "../../infraestructure/typography/text.component";
import {
  ProductCartItemContainer,
  ProductCartItemImage,
  ProductCartImageContainer,
  QuantityContainer,
  QuantityInputBox,
  QuantityIncButton,
  QuantityDecButton,
  ProductCartInfoContainer,
  ProductCartInfo,
  ProductCartInfo_stock,
  ProductCartButtonsContainer,
  SmallCardClearButton,
} from "./cart.elements";
import { Spacer } from "../../global_components/optimized.spacer.component";

export const ProductCartItem = ({ item, incQuantity, decQuantity }) => {
  const [quant, setQuant] = useState(1);
  // const pricesByQuant = item.price * item.quantity;
  return (
    <ProductCartItemContainer elevation={7}>
      <ProductCartImageContainer>
        <ProductCartItemImage source={{ uri: item.picture }} />
      </ProductCartImageContainer>
      <ProductCartInfoContainer>
        <Spacer position="top" size="large" />
        <ProductCartInfo>
          <Text variant="small_title">{item.name}</Text>
          <Text variant="small_title">
            ${(item.price * item.quantity) / 100}
          </Text>
        </ProductCartInfo>
        <Spacer position="top" size="small" />
        <ProductCartInfo_stock>
          <Text variant="label" style={{ color: "green" }}>
            In Stock
          </Text>
        </ProductCartInfo_stock>
        <ProductCartButtonsContainer>
          <SmallCardClearButton elevation={5}>
            <Text variant="button_caption">Delete</Text>
          </SmallCardClearButton>
          <QuantityContainer>
            <QuantityDecButton
              onPress={() => {
                const test = decQuantity(item);
              }}
            >
              <Text variant="button_caption"> - </Text>
            </QuantityDecButton>
            <QuantityInputBox
              value={JSON.stringify(item.quantity)}
              // placeholder="1"
              textAlign={"center"}
            />

            <QuantityIncButton
              onPress={() => {
                const test = incQuantity(item);
              }}
            >
              <Text variant="button_caption"> + </Text>
            </QuantityIncButton>
          </QuantityContainer>
        </ProductCartButtonsContainer>
      </ProductCartInfoContainer>
    </ProductCartItemContainer>
  );
};
