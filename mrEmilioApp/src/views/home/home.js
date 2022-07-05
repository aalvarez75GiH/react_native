import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";

import { SafeArea } from "../../global_components/safe-area.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { ProductCardView } from "./product.card";
import { FlatList, TouchableOpacity } from "react-native";
import { ProductsContext } from "../../infraestructure/services/products/products.context";
import { Search } from "./searchProducts.component";
import { FavouritesContext } from "../../infraestructure/services/favourites/favourites.context";
import { FavouritesBar } from "../../global_components/favourites/favourites-bar.component";
import { ProductList } from "./home.elements";

export const HomeView = ({ navigation }) => {
  const { products } = useContext(ProductsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const onFavouritesToggle = () => {
    setIsToggled(!isToggled);
  };

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
        <Search onFavouritesToggle={onFavouritesToggle} isToggled={isToggled} />

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
