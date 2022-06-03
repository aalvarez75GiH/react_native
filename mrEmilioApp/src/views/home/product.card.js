import React from "react";
import { Rating } from "react-native-ratings";

import myImage from "../../../assets/pictures/suero.jpg";
import { theme } from "../../infraestructure/theme";
import {
  ProductCardContainer,
  ProductCardCover,
  Info,
  Address,
  Section,
  SectionEnd,
  ViewProductButton,
  Icon,
  BuyProductButton,
  SendToCartButton,
} from "./product.card.elements";
import { Text } from "../../../src/infraestructure/typography/text.component";
import { Spacer } from "../../../src/global_components/optimized.spacer.component";

const ProductCardView = ({ product }) => {
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
      <ProductCardCover key={product.name} source={product.picture} />
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
            <Text variant="labelBold">{product.price}$</Text>
          </SectionEnd>
        </Section>
        <Address>{product.description}</Address>
        <Spacer position="top" size="large"></Spacer>
        <ViewProductButton>
          <Text variant="label" style={{ color: "#ffffff" }}>
            View Product
          </Text>
        </ViewProductButton>
        {/* <BuyProductButton>
          <Text variant="label" style={{ color: "#010606" }}>
            Buy Now
          </Text>
        </BuyProductButton>
        <Spacer position="top" size="small"></Spacer>
        <SendToCartButton>
          <Text variant="label" style={{ color: "#010606" }}>
            Send to cart
          </Text>
        </SendToCartButton> */}
      </Info>
    </ProductCardContainer>
  );
};

export default ProductCardView;
