import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { ProductCardView } from "./product.card";
import { ProductCard2View } from "./product.card_2";
import { Spacer } from "../../global_components/optimized.spacer.component";

export const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <ProductCard2View product={product} navigation={navigation} />
      </ScrollView>
    </SafeArea>
  );
};
