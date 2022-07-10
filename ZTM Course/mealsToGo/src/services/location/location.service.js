import camelize from "camelize";

import { host } from "../../utils/env";
console.log(host);
export const locationRequest = async (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}`).then((res) => {
    // return fetch(
    //   `https://us-central1-mealstogo-64385.cloudfunctions.net/geocode?city=${searchTerm}`
    // ).then((res) => {
    if (!res) {
      return "There is no city with that name...";
    }
    console.log(res);
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
