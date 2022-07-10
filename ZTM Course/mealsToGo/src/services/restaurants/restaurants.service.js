import camelize from "camelize";

import { host } from "../../utils/env";
console.log(host);
export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearBy?location=${location}`).then((res) => {
    if (!res) {
      return "There are no restaurants in this location";
    }
    console.log(res);
    return res.json();
  });
};
// };

export const restaurantsInfoTransformed = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};
