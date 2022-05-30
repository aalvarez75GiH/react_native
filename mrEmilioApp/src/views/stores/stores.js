import React, { useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { SearchContainer } from "./stores.elements";
import { Spacer } from "../../global_components/optimized.spacer.component";
import StoreCardView from "./store.card";
import { FlatList } from "react-native-gesture-handler";

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

const renderItem = ({ item }) => {
  console.log("this is Item: ", item);
  return (
    <Spacer position="bottom" size="large">
      <StoreCardView store={item} />
    </Spacer>
  );
};
export const StoresView = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <StoresList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeArea>
    </>
  );
};
