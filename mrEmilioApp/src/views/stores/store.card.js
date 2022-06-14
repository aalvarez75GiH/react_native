import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import OpenOrCloseIcon from "../../../assets/open_Icon";
import {
  StoreCardContainer,
  StoreCardCover,
  Info,
  Address,
  Raiting,
  Section,
  SectionEnd,
  Icon,
} from "./store.card.elements";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { Spacer } from "../../../src/global_components/optimized.spacer.component";
import image from "../../../assets/los_compadres.png";
export const StoreCardView = ({ store }) => {
  console.log("Store in StoreCardView:", store);
  const {
    name = "Some store",
    address = "1380 Prince av, Athens, GA 30605",
    work_hour = "9:00 am - 7:00 pm",
    picture = "url",
    rating = 4,
    id = "0001",
    placeID,
  } = store;

  const ratingArray = Array.from(new Array(Math.floor(store.rating)));

  const renderingRatingStars = ratingArray.map((_, i) => {
    return (
      <SvgXml xml={star} width="20" height="20" key={`star-${placeID}-${i}`} />
    );
  });

  return (
    <StoreCardContainer elevation={5}>
      {/* <StoreCardCover key={store.name} source={{ uri: store.picture[0] }} /> */}
      <StoreCardCover key={store.name} source={store.picture} />
      <Info>
        <Text variant="label">{store.name}</Text>
        <Section>
          <Raiting>{renderingRatingStars}</Raiting>
          <SectionEnd>
            <Spacer position="left" size="large"></Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: store.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{store.address}</Address>
      </Info>
    </StoreCardContainer>
  );
};
