import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactProductInfo } from "../../views/home/compactProduct-info.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { Text } from "../../infraestructure/typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <>
      <FavouritesWrapper>
        <Spacer variant="left.large">
          <Text variant="caption">Mis Favoritos</Text>
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
