const functions = require("firebase-functions");
const { Client } = require("@googlemaps/google-maps-services-js");

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

// **********
const googleClient = new Client({});
const stripeClient = require("stripe")(functions.config().stripe.key);

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearBy = functions.https.onRequest((req, res) => {
  placesRequest(req, res, googleClient);
});

exports.pay = functions.https.onRequest((req, res) => {
  payRequest(req, res, stripeClient);
});
