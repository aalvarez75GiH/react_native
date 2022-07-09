import camelize from "camelize";

// export const restaurantsRequest = (location) => {
//   console.log("location at restaurantRequest:", location);
//   return fetch(
//     `http://10.0.2.2:5001/mealstogo-64385/us-central1/placesNearBy?location=${location}`
//   ).then((res) => {
//     return res.json();
//   });
// };

export const restaurantsRequest = (location) => {
  const placesFunctionUrl =
    Platform.OS === "android"
      ? `http://10.0.2.2:5001/mealstogo-64385/us-central1/placesNearBy?location=${location}`
      : `http://localhost:5001/mealstogo-64385/us-central1/placesNearBy?location=${location}`;

  return fetch(placesFunctionUrl).then((res) => {
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
