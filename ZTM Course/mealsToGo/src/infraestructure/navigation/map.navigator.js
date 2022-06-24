import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const MapStack = createStackNavigator();

export const MapNavigator = () => {
  return (
    <MapStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <MapStack.Screen name="Map" component={MapScreen} />
      <MapStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </MapStack.Navigator>
  );
};
