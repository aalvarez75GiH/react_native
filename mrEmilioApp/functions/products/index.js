const { products } = require("./productsData");

module.exports.productsRequest = (request, response) => {
  if (!products.length) {
    response.send("There are no products at DB");
  }
  response.json(products);
};
