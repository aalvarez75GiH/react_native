import { products } from "./productsData";

export const productsRequest = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("There are no Products at DB");
    }
  });
};

export const productsRequestById = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("There are no Products at DB");
    }
  });
};
