import React from "react";

import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/start";
import OpenOrCloseIcon from "../../../../assets/open_Icon";
import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Raiting,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantsInfoCard = ({ restaurant }) => {
  console.log(restaurant);

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  // const {
  //   name,
  //   icon,
  //   photos,
  //   vicinity,
  //   isOpenNow,
  //   rating,
  //   isClosedTemporarily,
  // } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const renderingRatingStars = ratingArray.map(() => {
    return <SvgXml xml={star} width="20" height="20" />;
  });

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Raiting>{renderingRatingStars}</Raiting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <SvgXml xml={OpenOrCloseIcon} width="20" height="20" />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
