import { mocks, mockImages } from "../stores/index";
import camelize from "camelize";

export const storesRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

export const storesInfoTransformed = ({ results = [] }) => {
  const mappedResult = results.map((store) => {
    store.photos = store.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...store,
      isOpenNow: store.opening_hours && store.opening_hours.open_now,
      isClosedTemporarily: store.business_status === "CLOSED_TEMPORARILY",
    };
  });
  //   console.log(camelize(mappedResult));
  return camelize(mappedResult);
};
