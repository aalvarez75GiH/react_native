import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView from "react-native-maps";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Text } from "../../components/typography/text.component";
// import { MapScreen } from "../../features/map/screens/map.screen";
import { MapNavigator } from "./map.navigator";
const Tab = createBottomTabNavigator();

const Tab_icon = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>I am settings Screen</Text>
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
  );
};
