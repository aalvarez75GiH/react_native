import { host } from "../../../util/env";

export const productsRequest = () => {
  return fetch(`${host}/products`)
    .then((res) => {
      if (!res) {
        return "No hay productos";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
