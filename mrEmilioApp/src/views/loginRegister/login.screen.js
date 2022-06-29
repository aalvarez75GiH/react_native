import React, { useState, useContext } from "react";

import { Spacer } from "../../global_components/optimized.spacer.component";
import { Text } from "../../../src/infraestructure/typography/text.component";
import {
  AccountBackground,
  LoginRegisterCover,
  LoginRegisterContainer,
  AuthButton,
  AuthInput,
  BackButton,
  ErrorContainer,
} from "./loginRegister.elements.js";
import { AuthenticationContext } from "../../../src/infraestructure/services/authentication/authentication.context";
import { View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  console.log(email, password);

  return (
    <AccountBackground>
      <LoginRegisterCover />
      <Text variant="big_title">Mr Emilio</Text>
      <LoginRegisterContainer>
        <Spacer size="medium" />
        <AuthInput
          label="E-mail"
          value={email}
          textContentType={"emailAddress"}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => setEmail(value)}
        />
        <Spacer size="medium" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer size="medium" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </LoginRegisterContainer>
      <Spacer size="large">
        <BackButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </BackButton>
      </Spacer>
    </AccountBackground>
  );
};
