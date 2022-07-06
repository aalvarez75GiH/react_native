import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { FavouritesContext } from "../../../src/infraestructure/services/favourites/favourites.context";
import { theme } from "../../infraestructure/theme";
import { FavouriteButton } from "./favourites.elements";

export const FavouriteComponent = ({ product }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.id === product.id);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(product) : removeFromFavourites(product)
      }
    >
      <MaterialCommunityIcons
        name={isFavourite ? "bookmark" : "bookmark-outline"}
        size={34}
        color={isFavourite ? theme.colors.brand.primary : "gray"}
      />
    </FavouriteButton>
  );
};
