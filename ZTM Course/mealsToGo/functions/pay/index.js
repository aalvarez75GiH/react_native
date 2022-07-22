const functions = require("firebase-functions");

module.exports.payRequest = (req, res, stripeClient) => {
  const body = JSON.parse(req.body);
  console.log(body.token, body.name, body.amount);
  res.status(200).send("The token was recieved at Firebase Server");
};
