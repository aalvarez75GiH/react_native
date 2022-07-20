import React from "react";
import { Rating } from "react-native-ratings";
import { Text as IosBoldText } from "react-native";

import {
  ProductCardContainer,
  ProductCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  ViewProductButton,
} from "./product.card.elements";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { Spacer } from "../../../src/global_components/optimized.spacer.component";
import { FavouriteComponent } from "../../global_components/favourites/favourite.component";

export const ProductCardView = ({ product }) => {
  const {
    name = "Some Product",
    description = "Some description",
    picture = "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    rating = 4,
    price = 12,
    stock = 5,
    size = "32oz",
    quantity = "1",
  } = product;
  return (
    <ProductCardContainer elevation={5}>
      <FavouriteComponent product={product} />
      <ProductCardCover key={product.name} source={{ uri: product.picture }} />
      <Info>
        <Text variant="label">{product.name}</Text>
        <Section>
          <Rating
            type="heart"
            imageSize={30}
            startingValue={product.rating}
            readonly={true}
          />
          <SectionEnd>
            <IosBoldText
              // variant="labelBold"
              style={{ fontWeight: "700", fontSize: 18 }}
            >
              {product.price / 100}$
            </IosBoldText>
          </SectionEnd>
        </Section>
        <Address>{product.description}</Address>
        <Spacer position="top" size="large"></Spacer>
        <ViewProductButton>
          <Text variant="label" style={{ color: "#ffffff" }}>
            View Product
          </Text>
        </ViewProductButton>
      </Info>
    </ProductCardContainer>
  );
};
