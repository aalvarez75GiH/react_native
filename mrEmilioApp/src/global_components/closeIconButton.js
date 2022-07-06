import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { IconButton } from "react-native-paper";

import { theme } from "../infraestructure/theme";

const CloseIconButtonContainer = styled.View`
  width: 100%;
  height: auto;
  background-color: transparent;
  align-items: flex-end;
  justify-content: center;
`;
const CloseIconButton = styled(IconButton)``;

export const CloseButton = ({ navigation }) => {
  return (
    <CloseIconButtonContainer>
      <CloseIconButton
        icon="close"
        size={40}
        color={theme.colors.brand.primary}
        onPress={() => navigation.goBack()}
      />
    </CloseIconButtonContainer>
  );
};
