import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { IconButton } from "react-native-paper";

export const ProductCardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 95%;
  height: auto;
  margin-left: 3%;
`;

export const ProductCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  height: 400px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ProductCardCoverForDetail = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  height: 200px;
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

export const Description = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.description};
  color: ${(props) => props.theme.colors.ui.primary};
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

export const BuyProductButton = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.eCommerce.buyButton};
  justify-content: center;
  align-items: center;
  /* border-radius: 45px; */
`;
export const SendToCartButton = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.eCommerce.cartButton};
  justify-content: center;
  align-items: center;
  /* border-radius: 45px; */
`;

export const ViewProductButton = styled.View`
  width: 40%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.brand.tertiary};
  justify-content: center;
  align-items: center;
  margin-left: 60%;
`;
