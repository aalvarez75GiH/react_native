import React, { useContext } from "react";

import { FavouritesContext } from "../../infraestructure/services/favourites/favourites.context";
import { SafeArea } from "../../global_components/safe-area.component";
import { ProductMiniCard } from "../stores/productMiniCard";
import { ProductMiniCardContainer } from "../stores/store.card.elements";

export const MyFavourites = () => {
  const { favourites } = useContext(FavouritesContext);

  const renderingfavourites = favourites.map((favourite, index) => {
    return <ProductMiniCard product={favourite} key={index.toString()} />;
  });

  return (
    <SafeArea>
      <ProductMiniCardContainer>{renderingfavourites}</ProductMiniCardContainer>
    </SafeArea>
  );
};
