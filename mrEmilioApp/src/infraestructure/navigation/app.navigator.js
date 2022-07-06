import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StoresNavigator } from "./stores.navigator";
import { HomeNavigator } from "./home.navigator";
import { AccountNavigator } from "./account.navigator";

import { CartView } from "../../../src/views/cart/cart";
import { theme } from "../theme";

import { ProductsContextProvider } from "../services/products/products.context";
import { LocationContextProvider } from "../services/location/location.context";
import { StoresContextProvider } from "../services/stores/stores.context";
import { FavouritesContextProvider } from "../services/favourites/favourites.context";

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <StoresContextProvider>
          <ProductsContextProvider>
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
              <Tab.Screen name="account" component={AccountNavigator} />
            </Tab.Navigator>
          </ProductsContextProvider>
        </StoresContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
