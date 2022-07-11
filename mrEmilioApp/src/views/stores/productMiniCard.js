import React from "react";

import {
  MiniCardContainer,
  MiniCard,
  ProductImage,
  ProductName,
} from "./store.card.elements";

export const ProductMiniCard = ({ product }) => {
  console.log("Product at productMiniCard: ", product);
  console.log("Product Image URL at productMiniCard: ", product.picture);
  return (
    <>
      <MiniCardContainer>
        <MiniCard>
          <ProductImage source={{ uri: product.picture }} />
        </MiniCard>
        <ProductName>{product.name}</ProductName>
      </MiniCardContainer>
    </>
  );
};
