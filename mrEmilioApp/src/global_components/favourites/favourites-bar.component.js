import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactProductInfo } from "../../views/home/compactProduct-info.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { FavouritesWrapper, FavouriteBarTitle } from "./favourites.elements";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <>
      <FavouritesWrapper>
        <Spacer variant="left.large">
          <FavouriteBarTitle variant="caption">My favourites</FavouriteBarTitle>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((product) => {
            const key = product.id;
            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("ProductDetail", {
                      product,
                    })
                  }
                >
                  <CompactProductInfo product={product} isHome />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};
