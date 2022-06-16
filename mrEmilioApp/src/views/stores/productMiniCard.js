import React from "react";

import { Spacer } from "../../global_components/optimized.spacer.component";
import { Text } from "../../infraestructure/typography/text.component";
import {
  MiniCardContainer,
  MiniCard,
  ProductImage,
  ProductName,
} from "./store.card.elements";

export const ProductMiniCard = ({ product }) => {
  return (
    <>
      <MiniCardContainer key={product.id}>
        <MiniCard>
          <ProductImage source={product.picture} />
        </MiniCard>
        <ProductName>{product.name}</ProductName>
      </MiniCardContainer>
    </>
  );
};
