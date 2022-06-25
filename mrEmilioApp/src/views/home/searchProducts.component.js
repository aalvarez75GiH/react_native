import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ onFavouritesToggle, isToggled }) => {
  console.log("this is isToggled:", isToggled);
  //   const handlingIconPressing = () => {
  //     console.log("they are pressing me...");
  //   };

  return (
    <SearchContainer>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="search for a product"
        // value={searchKeyword}
        // onSubmitEditing={() => {
        //   search(searchKeyword);
        // }}
        // onChangeText={(text) => {
        //   setSearchKeyword(text);
        // }}
      />
    </SearchContainer>
  );
};
