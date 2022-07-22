const functions = require("firebase-functions");
const stripeClient = require("stripe")(functions.config().stripe.key);

const { geolocationRequest } = require("./geolocation");
const { productsRequest } = require("./products");
const { storesRequest, storesMenuRequest } = require("./stores");
const { companyDataRequest } = require("./company");
const { payRequest } = require("./pay");

exports.geolocation = functions.https.onRequest((req, res) => {
  geolocationRequest(req, res);
});

exports.products = functions.https.onRequest((req, res) => {
  productsRequest(req, res);
});

exports.stores = functions.https.onRequest((req, res) => {
  storesRequest(req, res);
});

exports.storesMenus = functions.https.onRequest((req, res) => {
  storesMenuRequest(req, res);
});

exports.companyInfo = functions.https.onRequest((req, res) => {
  companyDataRequest(req, res);
});

exports.pay = functions.https.onRequest((req, res) => {
  payRequest(req, res, stripeClient);
});
