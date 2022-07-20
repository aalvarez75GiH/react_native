import React from "react";
import styled from "styled-components/native";

import { IconButton } from "react-native-paper";
import { theme } from "../infraestructure/theme";

const LeftIconButtonContainer = styled.View`
  width: 15%;
  height: auto;
  background-color: transparent;
  /* background-color: green; */
  align-items: flex-start;
  justify-content: center;
`;
const LeftIconButton = styled(IconButton)``;

export const LeftButton = ({ navigation }) => {
  return (
    <LeftIconButtonContainer>
      <LeftIconButton
        icon="arrow-left"
        size={30}
        color={theme.colors.brand.primary}
        // color="#010606"
        onPress={() => navigation.goBack()}
      />
    </LeftIconButtonContainer>
  );
};
