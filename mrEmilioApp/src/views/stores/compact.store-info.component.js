import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../../infraestructure/typography/text.component";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactStoreInfo = ({ store, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  //   console.log("store at compact: ", store);
  return (
    <Item>
      <Image source={store.picture} />
      <Text center variant="caption" numberOfLines={3}>
        {store.name}
      </Text>
    </Item>
  );
};
