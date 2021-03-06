import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 90px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactProductInfo = ({ product, isHome }) => {
  const Image = CompactImage;
  return (
    <Item>
      <Image source={{ uri: product.picture }} />
      <Text center variant="caption" numberOfLines={3}>
        {product.name}
      </Text>
    </Item>
  );
};
