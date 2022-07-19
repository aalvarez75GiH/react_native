const functions = require("firebase-functions");
const { geolocationRequest } = require("./geolocation");
const { productsRequest } = require("./products");
const { storesRequest, storesMenuRequest } = require("./stores");
const { companyDataRequest } = require("./company");

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
