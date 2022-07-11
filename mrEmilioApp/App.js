import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";
import "./src/ignoreWarnings";

import { theme } from "./src/infraestructure/theme";

import { AuthenticationContextProvider } from "./src/infraestructure/services/authentication/authentication.context";
import { Navigation } from "./src/infraestructure/navigation";

// ***************** Firebase configuration
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdFCpKiPaoP-fsqYW7PmAY0NGwBnBZfCU",
  authDomain: "mremilio-b84c7.firebaseapp.com",
  projectId: "mremilio-b84c7",
  storageBucket: "mremilio-b84c7.appspot.com",
  messagingSenderId: "122966172010",
  appId: "1:122966172010:web:7054772c6679d5935d4513",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// ***************** Firebase configuration (END)

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
