import camelize from "camelize";
import { host } from "../../../util/env";
export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geolocation?city=${searchTerm}`)
    .then((res) => {
      if (!res) {
        return "No hay tiendas en esta área";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
