import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-Info-card";
import { theme } from "../../../infraestructure/theme";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites, isLoading } = useContext(FavouritesContext);
  console.log(isLoading);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantDetail", {
            restaurant: item,
          })
        }
      >
        <Spacer position="bottom" size="large">
          <FadeInView>
            <RestaurantsInfoCard restaurant={item} />
          </FadeInView>
        </Spacer>
      </TouchableOpacity>
    );
  };

  return favourites.length ? (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={theme.colors.ui.primary} size={50} />
        </LoadingContainer>
      )}
      <RestaurantList
        data={favourites}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <Text center>No favourites yet</Text>
    </SafeArea>
  );
};
