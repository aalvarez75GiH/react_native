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
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

//   ************ Styled Components ***************************

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
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  const onFavouritesToggle = () => {
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
          <FadeInView>
            <RestaurantsInfoCard restaurant={item} />
          </FadeInView>
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
