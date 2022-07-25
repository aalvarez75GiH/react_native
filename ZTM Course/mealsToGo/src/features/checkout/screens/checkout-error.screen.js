import React from "react";

import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";
import { theme } from "../../../infraestructure/theme";

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "Some error" } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={theme.colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
