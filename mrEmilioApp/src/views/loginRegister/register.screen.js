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
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../infraestructure/theme";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  console.log(email, password, repeatedPassword);

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
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer size="medium" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="medium" />
        <AuthInput
          label="Repeat password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(value) => setRepeatedPassword(value)}
        />
        <Spacer size="medium" />
        {!isLoading ? (
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={theme.colors.ui.primary} />
        )}
      </LoginRegisterContainer>
      <Spacer size="large">
        <BackButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </BackButton>
      </Spacer>
    </AccountBackground>
  );
};
