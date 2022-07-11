const { locations } = require("./location.mock");
const url = require("url");
const { throws } = require("assert");

module.exports.geolocationRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const cityGeometry = locations[city.toLowerCase()];

  if (!cityGeometry) {
    response.send("There is no geometry for city with that name");
    return;
  }
  response.json(cityGeometry);
};
