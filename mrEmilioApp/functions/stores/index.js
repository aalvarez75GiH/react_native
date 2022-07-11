const { stores } = require("./stores.data");
const { menus } = require("./stores_menu.data");
const url = require("url");

module.exports.storesRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;

  const myStores = stores[city.toLocaleLowerCase()];

  if (!myStores) {
    response.send("There are no stores at this city");
  }
  response.json(myStores);
};

module.exports.storesMenuRequest = (request, response) => {
  const { storeId } = url.parse(request.url, true).query;

  const myMenu = menus[storeId];

  // if (!myStores) {
  //   response.send("There are no stores at this city");
  // }
  response.json(myMenu);
};
