import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { StoresView } from "../../views/stores/stores";
import { StoreDetailScreen } from "../../views/stores/store-details.screen";
import { MapScreen } from "../../views/stores/map.screen";

const StoreStack = createStackNavigator();

export const StoresNavigator = () => {
  return (
    <StoreStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <StoreStack.Screen name="Stores" component={StoresView} />
      <StoreStack.Screen name="StoreDetail" component={StoreDetailScreen} />
      <StoreStack.Screen name="Map" component={MapScreen} />
    </StoreStack.Navigator>
  );
};
