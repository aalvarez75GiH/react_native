import styled from "styled-components/native";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
