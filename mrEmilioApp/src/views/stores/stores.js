import React, { useContext } from "react";
import styled from "styled-components/native";

import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../global_components/safe-area.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { StoreCardView } from "./store.card";
import { FlatList, TouchableOpacity } from "react-native";
import { StoresContext } from "../../infraestructure/services/stores/stores.context";
import { SearchStores } from "./searchStores.component";
import { theme } from "../../infraestructure/theme";

//   ************ Styled Components ***************************

const StoresList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const StoresView = ({ navigation }) => {
  const { stores, isLoading } = useContext(StoresContext);
  // console.log("Stores in stores.js:", stores);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("StoreDetail", {
            store: item,
            // navigation: navigation,
          })
        }
      >
        <Spacer position="bottom" size="large">
          <StoreCardView store={item} key={item.id} />
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
        <SearchStores />
        <StoresList
          data={stores}
          renderItem={renderItem}
          keyExtractor={(item, id) => {
            return item.id;
          }}
          // keyExtractor={(item) =>  item.place_id}
        />
      </SafeArea>
    </>
  );
};
