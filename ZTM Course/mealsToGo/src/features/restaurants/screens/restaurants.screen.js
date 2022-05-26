import React, { useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurants-Info-card";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurants.context";
import { theme } from "../../../infraestructure/theme";

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

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  const renderItem = ({ item }) => {
    console.log("this is Item: ", item);
    return (
      <Spacer position="bottom" size="large">
        <RestaurantsInfoCard restaurant={item} />
      </Spacer>
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
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
