import React from "react";
import { view } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;
const LeftSmall = styled.View`
  margin-left: 4px;
`;
const LeftMedium = styled.View`
  margin-left: 8px;
`;
const LeftLarge = styled.View`
  margin-left: 16px;
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.small") {
    return <TopSmall />;
  }
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
};
