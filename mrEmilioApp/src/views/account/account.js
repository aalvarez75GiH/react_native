import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import { SafeArea } from "../../global_components/safe-area.component";

//   ************ Styled Components ***************************
const AccountContainer = styled.View`
  flex: 1;
  background-color: purple;
`;
const Title = styled.Text`
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 16px;
`;

export const AccountView = () => {
  return (
    <>
      <SafeArea>
        <AccountContainer>
          <Title>I am Account View</Title>
        </AccountContainer>
      </SafeArea>
    </>
  );
};
