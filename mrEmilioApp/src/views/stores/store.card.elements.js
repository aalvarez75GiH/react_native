import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const StoreCardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 95%;
  margin-left: 3%;
`;
export const StoreCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Raiting = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ProductsToSaleContainer = styled(Card)`
  width: 95%;
  margin-left: 3%;
  height: auto;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: 10px;
`;
export const ProductToSale = styled.View`
  width: 100%;
  height: 100px;
  background-color: #eeeeee;
  border-radius: 15%;
`;
