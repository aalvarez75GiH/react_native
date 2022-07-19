const { companyData } = require("./companyData");

module.exports.companyDataRequest = (request, response) => {
  response.json(companyData);
};
