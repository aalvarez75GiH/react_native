import camelize from "camelize";
import axios from "axios";
import { Platform } from "react-native";

export const locationRequest = async (searchTerm) => {
  const geocodeFunctionUrl =
    Platform.OS === "android"
      ? `http://10.0.2.2:5001/mealstogo-64385/us-central1/geocode?city=${searchTerm}`
      : `http://0.0.0.0:5001/mealstogo-64385/us-central1/geocode?city=${searchTerm}`;

  return fetch(geocodeFunctionUrl).then((res) => {
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
