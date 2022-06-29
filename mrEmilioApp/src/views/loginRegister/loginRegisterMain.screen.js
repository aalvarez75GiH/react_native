import React from "react";

import { theme } from "../../infraestructure/theme";
import { Text } from "../../../src/infraestructure/typography/text.component";
import {
  AccountBackground,
  LoginRegisterCover,
  LoginRegisterContainer,
  AuthButton,
} from "./loginRegister.elements";
import { Spacer } from "../../global_components/optimized.spacer.component";

export const LoginRegisterMain = ({ navigation }) => {
  return (
    <AccountBackground>
      <LoginRegisterCover />
      <Text variant="big_title">Mr Emilio</Text>
      <LoginRegisterContainer>
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
      </LoginRegisterContainer>
    </AccountBackground>
  );
};
