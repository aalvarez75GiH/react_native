import React, { useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "../../../src/infraestructure/typography/text.component";

import { SafeArea } from "../../global_components/safe-area.component";

//   ************ Styled Components ***************************
const StoreContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
`;

export const StoresView = () => {
  return (
    <>
      <SafeArea>
        <StoreContainer>
          <Text variant="label">I am Stores View</Text>
        </StoreContainer>
      </SafeArea>
    </>
  );
};
