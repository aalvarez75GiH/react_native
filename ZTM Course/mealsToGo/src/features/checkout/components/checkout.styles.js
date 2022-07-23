import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { theme } from "../../../infraestructure/theme";
import { TextInput } from "react-native-paper";
import { ActivityIndicator } from "react-native-paper";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: theme.colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
  /* height: 20px; */
`;
export const ClearButton = styled(Button).attrs({
  color: theme.colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
  /* height: 20px; */
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: theme.colors.ui.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
