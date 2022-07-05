import React, { useEffect, useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import "./ignoreWarnings";

import { theme } from "./src/infraestructure/theme";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infraestructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// ***************** Firebase configuration
import * as firebase from "firebase";

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDN5vXGx2lpYCOlm7iihV79dsVzFrurjc",
  authDomain: "mealstogo-64385.firebaseapp.com",
  projectId: "mealstogo-64385",
  storageBucket: "mealstogo-64385.appspot.com",
  messagingSenderId: "425550156227",
  appId: "1:425550156227:web:3c6adede902217b47b6d76",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// ******************************************

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
