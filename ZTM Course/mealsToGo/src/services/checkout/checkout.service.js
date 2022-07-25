import createStripe from "stripe-client";

import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51LKvfVFxdTyvTLMGzdHGCTzTGSj6jPOu7X67alTtx7mnYHaAGNlgMdqEQSBTe071nMtliw5n9thuxJD3U5MtUOv000ouTnmZv9"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const paymentRequest = async (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: "POST",
  }).then((res) => {
    console.log("this is Res: ", res);
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing your payment...");
    }

    return res.json();
  });
};
