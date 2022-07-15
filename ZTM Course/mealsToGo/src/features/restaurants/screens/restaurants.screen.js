import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurants-Info-card";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { theme } from "../../../infraestructure/theme";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";

import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";
import { Text } from "../../../components/typography/text.component";

//   ************ Styled Components ***************************

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const ErrorMessageContainer = styled.View`
  width: 100%;
  height: 40px;
  /* background-color: green; */
`;

// *************************************************************

export const RestaurantsScreen = ({ navigation }) => {
  const {
    restaurants,
    isLoading,
    error: restaurantsError,
  } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const { error: locationError } = useContext(LocationContext);

  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!restaurantsError || !!locationError;

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
        {hasError && (
          <Spacer position="left" size="large">
            <Text variant="error">
              Something went wrong retrieving the data
            </Text>
          </Spacer>
        )}
        {!hasError && (
          <RestaurantList
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        )}
      </SafeArea>
    </>
  );
};
