import React from "react";
import { View } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";

import {
  ProductCartItemContainer,
  ProductCartItemImage,
  ProductCartImageContainer,
  QuantityContainer,
} from "./cart.elements";
import { ProductMiniCard } from "../stores/productMiniCard";
import { ProductMiniCardContainer } from "../stores/store.card.elements";

{
  /* <ProductCartItemImage source={{ uri: item.picture }} /> */
}
export const ProductCartItem = ({ item }) => {
  console.log("Item at ProductCartItem:", item.name);
  return (
    <ProductCartItemContainer>
      <ProductCartImageContainer>
        <ProductCartItemImage source={{ uri: item.picture }} />
        <QuantityContainer></QuantityContainer>
      </ProductCartImageContainer>
      {/* <ProductCartInfoContainer></ProductCartInfoContainer> */}
    </ProductCartItemContainer>
  );

  //   return null;
};
