import React, { useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { SearchContainer } from "./home.elements";
import { Spacer } from "../../global_components/optimized.spacer.component";
import ProductCardView from "./product.card";
import { FlatList } from "react-native-gesture-handler";
import { ProductsContext } from "../../infraestructure/services/products/products.context";

const data = [
  {
    name: 1,
    id: 1,
  },
  {
    name: 2,
    id: 2,
  },
  {
    name: 3,
    id: 3,
  },
  {
    name: 4,
    id: 4,
  },
];
//   ************ Styled Components ***************************

const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const renderItem = ({ item }) => {
  // console.log("this is Item: ", item);
  return (
    <Spacer position="bottom" size="large">
      <ProductCardView product={item} />
    </Spacer>
  );
};
export const HomeView = () => {
  const { products, isLoading, error } = useContext(ProductsContext);
  console.log("this is Products at home View:", products);

  // const test = products.map((product) => {
  //   return console.log(product.name);
  // });

  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <ProductList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeArea>
    </>
  );
};
