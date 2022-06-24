import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../resturant/compact-restaurant-info.component";
import { Spacer } from "../spacer/optimized.spacer.component";
import { Text } from "../typography/text.component";

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
          <Text variant="caption">Favourites</Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.placeId;
            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FavouritesWrapper>
    </>
  );
};