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
const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const product = {
  name: "Some Restaurant",
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos: [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  vicinity: "100 some random street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: true,
};

const renderItem = ({ item }) => {
  console.log("this is Item: ", item);
  return (
    <Spacer position="bottom" size="large">
      <ProductCardView product={item} />
    </Spacer>
  );
};
export const HomeView = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <ProductList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeArea>
    </>
  );
};
