import React from "react";

import { SafeArea } from "../../global_components/safe-area.component";
import { ProductCardView } from "./product.card";
import { ProductCard2View } from "./product.card_2";

export const ProductDetailScreen = ({ route }) => {
  // console.log("route.params:", route.params);
  const { product } = route.params;
  return (
    <SafeArea>
      <ProductCard2View product={product} />
    </SafeArea>
  );
};
