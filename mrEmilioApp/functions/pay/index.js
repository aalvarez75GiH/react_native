module.exports.payRequest = (req, res, stripeClient) => {
  const body = JSON.parse(req.body);
  const { token, amount, name } = body;
  console.log(token, amount, name);

  stripeClient.paymentIntents
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
      console.log(err);
      res.status(400).send("An error occurred with the payment");
    });
};
