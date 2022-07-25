import React from "react";

import { SafeArea } from "../../global_components/safe-area.component";
import { Text } from "../../infraestructure/typography/text.component";
import { EmptyCartIconContainer, PaymentSuccessIcon } from "./cart.elements";

export const PaymentSuccessScreen = () => {
  return (
    <SafeArea>
      <EmptyCartIconContainer>
        <PaymentSuccessIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </EmptyCartIconContainer>
    </SafeArea>
  );
};
