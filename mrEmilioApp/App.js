import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infraestructure/theme";
import { ProductsContextProvider } from "./src/infraestructure/services/products/products.context";
import { LocationContextProvider } from "./src/infraestructure/services/location/location.context";
import { StoresContextProvider } from "./src/infraestructure/services/stores/stores.context";
import { FavouritesContextProvider } from "./src/infraestructure/services/favourites/favourites.context";
import { Navigation } from "./src/infraestructure/navigation";

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
        <FavouritesContextProvider>
          <ProductsContextProvider>
            <LocationContextProvider>
              <StoresContextProvider>
                <Navigation />
              </StoresContextProvider>
            </LocationContextProvider>
          </ProductsContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
