import React from "react";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurants-Info-card";

export const RestaurantDetailScreen = ({ route }) => {
  // console.log("route.params:", route.params);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
