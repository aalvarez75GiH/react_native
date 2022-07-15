import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51LKvfVFxdTyvTLMGzdHGCTzTGSj6jPOu7X67alTtx7mnYHaAGNlgMdqEQSBTe071nMtliw5n9thuxJD3U5MtUOv000ouTnmZv9"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
