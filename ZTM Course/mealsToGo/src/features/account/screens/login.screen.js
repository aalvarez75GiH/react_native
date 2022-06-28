import React, { useState, useContext } from "react";

import image from "../../../../assets/home_bg.jpg";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { theme } from "../../../infraestructure/theme";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  BackButton,
  ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  console.log(email, password);

  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="big_title">Meals To Go</Text>
      <AccountContainer>
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
      </AccountContainer>
      <Spacer size="large">
        <BackButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </BackButton>
      </Spacer>
    </AccountBackground>
  );
};
