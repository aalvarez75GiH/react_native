import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [picture, setPicture] = useState(null);

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  const getProfilePicture = async (currentUser) => {
    const picUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPicture(picUri);
    console.log(picUri);
  };

  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large" />
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!picture ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={180} source={{ uri: picture }} />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};
