import createStripe from "stripe-client";

import { host } from "../../../util/env";

// ************* Stripe Request Service *************

const stripe = createStripe(
  "pk_test_51LKvfVFxdTyvTLMGzdHGCTzTGSj6jPOu7X67alTtx7mnYHaAGNlgMdqEQSBTe071nMtliw5n9thuxJD3U5MtUOv000ouTnmZv9"
);

export const cardTokenRequest = (card) => {
  console.log(card);
  return stripe.createToken({ card });
};

export const companyDataRequest = () => {
  return fetch(`${host}/companyInfo`)
    .then((res) => {
      if (!res) {
        return "No hay info";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
