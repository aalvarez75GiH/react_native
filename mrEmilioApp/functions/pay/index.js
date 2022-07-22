module.exports.payRequest = (req, res, stripeClient) => {
  const body = JSON.parse(req.body);
  console.log(body.token, body.amount, body.name);
  res.send(" i am the confused stripe client...");
};
