import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";

export const FavouritesWrapper = styled.View`
  padding: 10px;
  /* background-color: #dedede; */
`;

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouriteBarTitle = styled(Text)`
  margin-left: 5%;
`;
