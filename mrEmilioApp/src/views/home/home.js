import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { SearchContainer } from "./home.elements";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductCardView } from "./product.card";
import { FlatList, TouchableOpacity } from "react-native";
import { ProductsContext } from "../../infraestructure/services/products/products.context";
import { Search } from "./searchProducts.component";
import { FavouritesContext } from "../../infraestructure/services/favourites/favourites.context";
import { FavouritesBar } from "../../global_components/favourites/favourites-bar.component";

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

export const HomeView = ({ navigation }) => {
  const { products, isLoading, error, restaurants } =
    useContext(ProductsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const onFavouritesToggle = () => {
    setIsToggled(!isToggled);
  };

  console.log("isToggled:", isToggled);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ProductDetail", {
            product: item,
          });
        }}
      >
        <Spacer position="bottom" size="large">
          <ProductCardView product={item} />
        </Spacer>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeArea>
        <Search onFavouritesToggle={onFavouritesToggle} isToggled />

        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <ProductList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeArea>
    </>
  );
};
