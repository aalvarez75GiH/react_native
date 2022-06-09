import React, { useContext } from "react";
import styled from "styled-components/native";

import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../global_components/safe-area.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import StoreCardView from "./store.card";
import { FlatList } from "react-native-gesture-handler";
import { ProductsContext } from "../../infraestructure/services/products/products.context";
import { StoresContext } from "../../infraestructure/services/stores/stores.context";
import { SearchStores } from "./searchStores.component";
import { theme } from "../../infraestructure/theme";

const data = [
  {
    name: 1,
    id: 1,
  },
  {
    name: 2,
    id: 2,
  },
  {
    name: 3,
    id: 3,
  },
  {
    name: 4,
    id: 4,
  },
];
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

const renderItem = ({ item }) => {
  // console.log("this is Item: ", item);
  return (
    <Spacer position="bottom" size="large">
      <StoreCardView store={item} />
    </Spacer>
  );
};
export const StoresView = () => {
  const { stores, isLoading } = useContext(StoresContext);
  // console.log("this is Stores at Stores View:", stores);
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
          keyExtractor={(item) => item.place_id}
        />
      </SafeArea>
    </>
  );
};
