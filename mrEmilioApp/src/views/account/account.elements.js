import styled from "styled-components/native";
import { List } from "react-native-paper";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const AccountItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AccountContainer = styled.View`
  flex: 1;
`;

export const AccountText = styled.Text`
  color: "#010606";
`;

// ***************** Camera Screen elements

export const CameraContainer = styled.View`
  flex: 1;
`;

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraButtonContainer = styled.View`
  flex: 1;
  background-color: "transparent";
  flex-direction: row;
  margin: 20px;
`;

export const FlipButton = styled(TouchableOpacity)`
  flex: 0.4;
  align-self: flex-end;
  align-items: center;
  background-color: #010606;
  padding: 15px;
  border-radius: 45px;
`;

export const CameraText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;
