import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";

import { AccountView } from "../../../src/views/account/account";
import { StoresNavigator } from "./stores.navigator";
import { HomeNavigator } from "./home.navigator";
import { CartView } from "../../../src/views/cart/cart";
import { theme } from "../theme";

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

export const AppNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: theme.colors.brand.tertiary,
        inactiveTintColor: theme.colors.ui.secondary,
      }}
    >
      <Tab.Screen name="home" component={HomeNavigator} />
      <Tab.Screen name="stores" component={StoresNavigator} />
      <Tab.Screen name="cart" component={CartView} />
      <Tab.Screen name="account" component={AccountView} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
