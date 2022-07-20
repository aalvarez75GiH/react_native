import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

import { Spacer } from "../../global_components/optimized.spacer.component";
import { cardTokenRequest } from "../../infraestructure/services/cart/cart.services";

export const CreditCardInputComponent = () => {
  //     const card = {
  //     number: values.name,
  //     exp_month: expiry[0],
  //     exp_year: expiry[1],
  //     cvc: values.cvc,
  //     name: name,
  //   };

  const onChange = async (formData) => {
    const { values, status } = formData;
    console.log(formData);
    const isIncomplete = Object.values(status).includes("incomplete");
    console.log(isIncomplete);
    const expiry = values.expiry.split("/");
    console.log(expiry);

    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: "Arnoldo Alvarez",
    };

    const response = await cardTokenRequest(card);
    console.log(response);
  };

  return (
    <Spacer position="left" size="medium">
      <LiteCreditCardInput onChange={onChange} validColor="green" autoFocus />
    </Spacer>
  );
};
