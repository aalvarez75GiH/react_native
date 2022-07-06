import React from "react";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity } from "react-native";

import star from "../../../assets/star";
import OpenOrCloseIcon from "../../../assets/open_Icon";
import {
  StoreCardContainer,
  StoreCardCover,
  Info,
  Address,
  WorkHours,
  Raiting,
  Section,
  SectionEnd,
  MapButton,
  MapButtonText,
} from "./store.card.elements";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { CloseButton } from "../../global_components/closeIconButton";
import { Spacer } from "../../../src/global_components/optimized.spacer.component";
import image from "../../../assets/los_compadres.png";

export const StoreCardDetailsView = ({ store, navigation }) => {
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
      <CloseButton navigation={navigation} />
      <StoreCardCover key={store.name} source={store.picture} />
      <Info>
        <Text variant="label">{store.name}</Text>
        <Section>
          <WorkHours variant="label">{store.workHour}</WorkHours>
          <SectionEnd>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Map", {
                  store: store,
                })
              }
            >
              <MapButton>
                <MapButtonText variant="label">Ver en Mapa</MapButtonText>
              </MapButton>
            </TouchableOpacity>
          </SectionEnd>
        </Section>
        <Address>{store.address}</Address>
      </Info>
    </StoreCardContainer>
  );
};
