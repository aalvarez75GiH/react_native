import camelize from "camelize";

import { host, isMock } from "../../utils/env";
console.log(host);
export const locationRequest = async (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => {
      if (!res) {
        return "There is no city with that name...";
      }
      console.log(res);
      return res.json();
    }
  );
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
