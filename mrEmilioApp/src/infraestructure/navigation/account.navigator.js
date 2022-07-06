import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { MyFavourites } from "../../views/account/myFavourites";

import { CameraScreen } from "../../views/account/camera.screen";
import { AccountView } from "../../views/account/account";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <AccountStack.Screen name="Account" component={AccountView} />
      <AccountStack.Screen name="Favourites" component={MyFavourites} />
      <AccountStack.Screen name="Camera" component={CameraScreen} />
    </AccountStack.Navigator>
  );
};
