import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";

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

export const WorkHours = styled.Text`
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

// *******************  Store Detail Screen

export const ProductsToSaleContainer = styled.View`
  width: 95%;
  margin-left: 3%;
  height: auto;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: 10px;
`;

export const ProductToSaleTitleContainer = styled.View`
  width: 100%;
  height: auto;
  margin-left: 3%;
`;

export const ProductsToSaleTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const ProductMiniCardContainer = styled.View`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: 10px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProductMiniCard = styled.View`
  width: 30%;
  height: 115px;
  background-color: #eeeeee;
  border-radius: 15px;
  margin: 1%;
`;
export const MiniCardContainer = styled.View`
  width: 30%;
  height: auto;
  /* background-color: blue; */
  border-radius: 15px;
  margin: 1%;
  /* justify-content: center; */
  align-items: center;
  margin-left: 2%;
  margin-top: 3%;
`;
export const MiniCard = styled.View`
  width: 100%;
  height: 115px;
  background-color: #eeeeee;
  border-radius: 15px;
  /* margin: 1%; */
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export const ProductName = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

// export const ProductInfoContainer = styled.View`
//   padding: 10px;
//   width: 80%;
//   height: auto;
// `;
