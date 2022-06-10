import React from "react";

import { SafeArea } from "../../global_components/safe-area.component";
import { StoreCardView } from "./store.card";

export const StoreDetailScreen = ({ route }) => {
  // console.log("route.params:", route.params);
  const { store } = route.params;
  return (
    <SafeArea>
      <StoreCardView store={store} />
    </SafeArea>
  );
};
