import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeView } from "./src/views/home/home";
import { AccountView } from "./src/views/account/account";
import { StoresView } from "./src/views/stores/stores";

const Tab = createBottomTabNavigator();
const Tab_icon = {
  home: "home-variant-outline",
  stores: "storefront-outline",
  account: "account-circle-outline",
  cart: "cart-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = Tab_icon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={36} color={color} />
    ),
  };
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="home" component={HomeView} />
          <Tab.Screen name="stores" component={StoresView} />
          <Tab.Screen name="cart" component={AccountView} />
          <Tab.Screen name="account" component={AccountView} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
