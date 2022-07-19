import styled from "styled-components/native";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { Avatar, List } from "react-native-paper";

// ************* Empty cart *********************
export const EmptyCartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const EmptyCartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

// ********** Cart ***************************
export const CartViewHeader = styled.View`
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;
export const CartBuyProductButton = styled(TouchableOpacity)`
  width: 95%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.eCommerce.buyButton};
  justify-content: center;
  align-items: center;
  margin-left: 2%;
  border-radius: 10px;
`;
export const CartViewFooter = styled.View`
  width: 100%;
  height: 90px;
  justify-content: center;
  /* align-items: flex-end; */
  /* background-color: red; */
`;
// ************** Product Cart Item ***********************
export const ProductCartItemContainer = styled.View`
  flex: 1;
  width: 95%;
  height: auto;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  /* background-color: blue; */
  margin-bottom: 3%;
  flex-direction: row;
  border: 1px solid #eeeeee;
  /* border-radius: 15px; */
`;

export const ProductCartImageContainer = styled(View)`
  width: 30%;
  height: auto;
  margin-top: 2%;
  /* background-color: red; */
`;
export const ProductCartItemImage = styled(Image)`
  width: 80%;
  height: 90px;
  /* border-radius: 15px; */
`;

export const ProductCartInfoContainer = styled(View)`
  width: 70%;
  height: auto;
  /* background-color: purple; */
`;
export const ProductCartInfo = styled(View)`
  flex: 0;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  height: auto;
  /* background-color: lightblue; */
`;

export const ProductCartInfo_stock = styled(View)`
  width: 100%;
  height: auto;
  /* background-color: lightcoral; */
`;

export const ProductCartButtonsContainer = styled(View)`
  width: 100%;
  height: 100px;
  /* background-color: green; */
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SmallCardClearButton = styled(TouchableOpacity)`
  width: 25%;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #dedede;
`;

export const QuantityContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  width: 75%;
  height: 40px;
  /* background-color: palegreen; */
`;
export const QuantityDecButton = styled(TouchableOpacity)`
  width: 20%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.small_buttons};
  justify-content: center;
  align-items: center;
  border: 1px solid #dedede;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const QuantityInputBox = styled(TextInput)`
  width: 30%;
  height: 40px;
  border: 1px solid #dedede;
  /* border-top-width: 1px; */
  justify-content: center;
  align-items: center;
`;

export const QuantityIncButton = styled(TouchableOpacity)`
  width: 20%;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #dedede;
  background-color: ${(props) => props.theme.colors.small_buttons};
`;

// *************** Order/Payment Screen*************************

export const OrderInfoContainer = styled.View`
  width: 95%;
  height: 230px;
  /* background-color: green; */
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin-left: 3%;
  flex: 1;
  flex-direction: row;
`;

export const OrderInfoDesc = styled.View`
  width: 75%;
  height: auto;
  /* background-color: lightblue; */
  padding: 20px;
`;
export const OrderInfoAmounts = styled.View`
  width: 25%;
  height: auto;
  padding: 14px;
  /* background-color: lightyellow; */
`;
