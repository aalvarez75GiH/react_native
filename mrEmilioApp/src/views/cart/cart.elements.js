import styled from "styled-components/native";
import { View, Image } from "react-native";

// ************** Product Cart Item ***********************

export const ProductCartItemContainer = styled.View`
  width: 100%;
  height: auto;
  background-color: blue;
  margin-bottom: 3%;
`;

export const ProductCartImageContainer = styled.View`
  width: 30%;
  height: auto;
  background-color: red;
`;
export const ProductCartItemImage = styled(Image)`
  width: 100%;
  height: 100px;
  /* border-radius: 15px; */
`;

export const QuantityContainer = styled.View`
  width: 100%;
  height: 50px;
  /* background-color: palegreen; */
`;
