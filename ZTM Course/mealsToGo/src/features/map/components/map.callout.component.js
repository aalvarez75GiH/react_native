import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../../../components/resturant/compact-restaurant-info.component";
const MyText = styled.Text``;

export const MapCallOut = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};
