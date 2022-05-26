import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import { SafeArea } from "../../global_components/safe-area.component";

//   ************ Styled Components ***************************
const StoreContainer = styled.View`
  flex: 1;
  background-color: blue;
`;
const Title = styled.Text`
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 16px;
`;

export const StoresView = () => {
  return (
    <>
      <SafeArea>
        <StoreContainer>
          <Title>I am Stores View</Title>
        </StoreContainer>
      </SafeArea>
    </>
  );
};
