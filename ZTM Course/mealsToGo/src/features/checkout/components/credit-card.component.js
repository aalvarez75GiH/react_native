import React, { useEffect } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { Spacer } from "../../../components/spacer/optimized.spacer.component";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInputComponent = ({
  name = "Arnoldo Alvarez",
  onSuccess,
  onError,
}) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(formData);
    console.log(isIncomplete);

    const expiry = values.expiry.split("/");
    console.log(expiry);

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
        console.log("Response at components:", response);
        onSuccess(response);
      } catch (error) {
        onError(error);
      }
    }
  };

  return (
    <Spacer>
      <LiteCreditCardInput onChange={onChange} />
    </Spacer>
  );
};
