import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";

import { HomeView } from "./src/views/home/home";
import { AccountView } from "./src/views/account/account";
import { StoresView } from "./src/views/stores/stores";
import { CartView } from "./src/views/cart/cart";
import { theme } from "./src/infraestructure/theme";
import { ProductsContextProvider } from "./src/infraestructure/services/products/products.context";

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

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  useFonts,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: theme.colors.brand.tertiary,
                inactiveTintColor: theme.colors.ui.secondary,
              }}
            >
              <Tab.Screen name="home" component={HomeView} />
              <Tab.Screen name="stores" component={StoresView} />
              <Tab.Screen name="cart" component={CartView} />
              <Tab.Screen name="account" component={AccountView} />
            </Tab.Navigator>
          </NavigationContainer>
        </ProductsContextProvider>
      </ThemeProvider>
    </>
  );
}
