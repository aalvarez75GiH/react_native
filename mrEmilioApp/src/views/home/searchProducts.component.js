import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ onFavouritesToggle, isToggled }) => {
  return (
    <SearchContainer>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="search for a product"
      />
    </SearchContainer>
  );
};
