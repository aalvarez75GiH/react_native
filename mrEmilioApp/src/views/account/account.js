import React, { useState, useContext } from "react";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton, MD3Colors } from "react-native-paper";

import { SafeArea } from "../../global_components/safe-area.component";
import { Spacer } from "../../global_components/optimized.spacer.component";
import { Text } from "../../infraestructure/typography/text.component";
import { AuthenticationContext } from "../../infraestructure/services/authentication/authentication.context";
import { AvatarContainer, AccountItem } from "./account.elements";
import { theme } from "../../infraestructure/theme";

// *********Styled Components******************
const ChangeAvatarIconContainer = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  background-color: #ededed;
  position: absolute;
  top: 20%;
  left: 64%;
  border-radius: 50px;
  z-index: 999;
  justify-content: center;
  align-items: center;
`;

// *********Styled Components******************

export const AccountView = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  const getProfilePicture = async (currentUser) => {
    const picUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(picUri);
    console.log(picUri);
  };

  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large" />
        <ChangeAvatarIconContainer>
          <IconButton
            icon="camera"
            size={30}
            color={theme.colors.brand.primary}
            onPress={() => navigation.navigate("Camera")}
          />
        </ChangeAvatarIconContainer>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Camera")}> */}
        {!photo ? (
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        ) : (
          <Avatar.Image size={180} source={{ uri: photo }} />
        )}
        {/* </TouchableOpacity> */}
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <AccountItem
          title="My favourites"
          description="Mis favoritos"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <AccountItem
          title="Log out"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogOut()}
        />
      </List.Section>
    </SafeArea>
  );
};
