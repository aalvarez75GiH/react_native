import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurants-Info-card";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { theme } from "../../../infraestructure/theme";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

//   ************ Styled Components ***************************

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// *************************************************************

export const RestaurantsScreen = ({ navigation }) => {
  // console.log(navigation);
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const onFavouritesToggle = () => {
    // console.log("this is test...");
    setIsToggled(!isToggled);
  };

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
          <RestaurantsInfoCard restaurant={item} />
        </Spacer>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading
              animating={true}
              color={theme.colors.ui.primary}
              size={50}
            />
          </LoadingContainer>
        )}
        <Search onFavouritesToggle={onFavouritesToggle} isToggled={isToggled} />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        <RestaurantList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
