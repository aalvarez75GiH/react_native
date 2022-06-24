import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../src/infraestructure/services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouriteComponent = ({ product }) => {
  //   console.log(restaurant);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  console.log(favourites);

  const isFavourite = favourites.find((r) => r.id === product.id);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(product) : removeFromFavourites(product)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
