import React from "react";
import { Button } from "react-native-paper";

import image from "../../../../assets/home_bg.jpg";
import { theme } from "../../../infraestructure/theme";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="big_title">Meals To Go</Text>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          color={theme.colors.brand.primary}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          color={theme.colors.brand.primary}
        >
          Register
        </AuthButton>
        <Spacer size="large" />
      </AccountContainer>
    </AccountBackground>
  );
};
