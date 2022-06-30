import React, { useContext } from "react";
import { View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Text } from "../../components/typography/text.component";
import { MapNavigator } from "./map.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantContextProvider } from "../../services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const Tab_icon = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const SettingsScreen = () => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View>
        <Text>{user.email}</Text>
        <Button title="Sign out" onPress={() => onLogOut()} />
      </View>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = Tab_icon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapNavigator} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
