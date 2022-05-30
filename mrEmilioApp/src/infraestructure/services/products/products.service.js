import { products } from "./productsData";
import { mocks, mockImages } from "../stores/index";
import camelize from "camelize";

export const productsRequest = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      resolve(products);
    } else {
      reject("There are no Products at DB");
    }
  });
};

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

export const restaurantsInfoTransformed = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(camelize(mappedResult));
  return camelize(mappedResult);
};
