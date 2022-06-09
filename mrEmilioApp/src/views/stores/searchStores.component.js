import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../infraestructure/services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchStores = () => {
  const { keyword, search } = useContext(LocationContext);
  console.log("this is keyword:", keyword);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  console.log(searchKeyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
