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

const StoreCardView = () => {
  const store = {
    name: "Some Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };

  const ratingArray = Array.from(new Array(Math.floor(store.rating)));

  const renderingRatingStars = ratingArray.map(() => {
    return <SvgXml xml={star} width="20" height="20" />;
  });

  return (
    <StoreCardContainer elevation={5}>
      <StoreCardCover key={store.name} source={{ uri: store.photos[0] }} />
      <Info>
        <Text variant="label">{store.name}</Text>
        <Section>
          <Raiting>{renderingRatingStars}</Raiting>
          <SectionEnd>
            {store.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {store.isOpenNow && (
                <SvgXml xml={OpenOrCloseIcon} width="20" height="20" />
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: store.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{store.vicinity}</Address>
      </Info>
    </StoreCardContainer>
  );
};

export default StoreCardView;
