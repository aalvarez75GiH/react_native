const functions = require("firebase-functions");

module.exports.payRequest = (req, res, stripeClient) => {
  const body = JSON.parse(req.body);
  const { token, amount, name } = body;
  console.log(token, name, amount);

  const paymentIntent = stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntentResponse) => {
      console.log(paymentIntentResponse);
      res.json(paymentIntentResponse);
    })
    .catch((err) => {
      res.status(400).send("there was an error with your payment");
    });
};
