import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  /* background-color: transparent;
  border-color: #202232; */
  position: absolute;
  top: 25px;
  right: 25px;
  /* width: 64px; */
  z-index: 9;
`;

export const FavouriteComponent = ({ restaurant }) => {
  //   console.log(restaurant);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  console.log(favourites);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
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