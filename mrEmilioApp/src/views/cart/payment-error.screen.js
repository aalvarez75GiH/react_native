import React from "react";

import { SafeArea } from "../../global_components/safe-area.component";
import { Text } from "../../infraestructure/typography/text.component";
import { EmptyCartIconContainer, PaymentErrorIcon } from "./cart.elements";

export const PaymentErrorScreen = ({ route }) => {
  const { error } = route.params;
  return (
    <SafeArea>
      <EmptyCartIconContainer>
        <PaymentErrorIcon icon="close" />
        <Text variant="label">{error}</Text>
      </EmptyCartIconContainer>
    </SafeArea>
  );
};
