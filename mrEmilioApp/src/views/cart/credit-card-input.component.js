import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { Spacer } from "../../global_components/optimized.spacer.component";
import { cardTokenRequest } from "../../infraestructure/services/cart/cart.services";

export const CreditCardInputComponent = ({
  name = "Jonh Doe",
  onSuccess,
  onError,
  handlingIsInComplete,
}) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const expiry = values.expiry.split("/");
    // console.log(expiry);

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };

    if (!isIncomplete) {
      try {
        const response = await cardTokenRequest(card);
        console.log(response);
        onSuccess(response);
      } catch (error) {
        onError("Take a look to your credit card information...");
      }
    }
  };

  return (
    <Spacer position="left" size="medium">
      <LiteCreditCardInput onChange={onChange} />
    </Spacer>
  );
};
