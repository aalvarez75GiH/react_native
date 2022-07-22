import createStripe from "stripe-client";

import { host } from "../../../util/env";

// ************* Stripe Request Service *************

const stripe = createStripe(
  "pk_test_51LKvfVFxdTyvTLMGzdHGCTzTGSj6jPOu7X67alTtx7mnYHaAGNlgMdqEQSBTe071nMtliw5n9thuxJD3U5MtUOv000ouTnmZv9"
);
// ****** Request in order to get token from stripe
export const cardTokenRequest = (card) => {
  console.log(card);
  return stripe.createToken({ card });
};

// ****** Request in order to get company info
export const companyDataRequest = async () => {
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

// ****** Request to firebase Payment end point in order to send info to Stripe
export const paymentRequest = async (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    if (!res) {
      return "There was a problem with the response from server";
    }
    console.log(res);
    return res.json();
  });
};
