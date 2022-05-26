import React, { useContext } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";
import { SafeArea } from "../../global_components/safe-area.component";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brand.muted};
`;

export const AccountView = () => {
  return (
    <>
      <SafeArea>
        <AccountContainer>
          <Text variant="label">I am Account View</Text>
        </AccountContainer>
      </SafeArea>
    </>
  );
};
