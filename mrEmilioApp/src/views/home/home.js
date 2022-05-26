import React, { useContext } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import { SafeArea } from "../../global_components/safe-area.component";

//   ************ Styled Components ***************************
const HomeContainer = styled.View`
  flex: 1;
  background-color: red;
`;
const Title = styled.Text`
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 16px;
`;

export const HomeView = () => {
  return (
    <>
      <SafeArea>
        <HomeContainer>
          <Title>I am Home View</Title>
        </HomeContainer>
      </SafeArea>
    </>
  );
};
