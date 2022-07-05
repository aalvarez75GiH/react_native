import React from "react";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

import image from "../../../../assets/home_bg.jpg";
import { theme } from "../../../infraestructure/theme";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
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
