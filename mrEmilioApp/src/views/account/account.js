import React, { useContext } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

import { SafeArea } from "../../global_components/safe-area.component";
import { AuthenticationContext } from "../../infraestructure/services/authentication/authentication.context";
import { AccountContainer } from "./account.elements";
import { Text } from "../../infraestructure/typography/text.component";
//   ************ Styled Components ***************************

export const AccountView = () => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  // console.log("this is Response at Account View:", response);
  // console.log("this is user email at Account View:", response.user.email);
  return (
    <SafeArea>
      <AccountContainer>
        <Text>{user.email}</Text>
        <Button title="Sign out" onPress={() => onLogOut()} />
      </AccountContainer>
    </SafeArea>
  );
};
