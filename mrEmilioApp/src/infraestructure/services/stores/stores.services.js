import { stores } from "./stores.data";
import { storesMenu } from "./stores_menu.data";
import { menus } from "./stores_menu.data";

import camelize from "camelize";

export const storesRequestByLocation = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not Found");
    }
    resolve(mock);
  });
};

export const storesRequestBySearchTerm = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const storesMock = stores[searchTerm];
    // console.log("storesMock:", storesMock);
    if (!storesMock) {
      reject("not Found");
    }
    resolve(storesMock);
  });
};

export const storeMenuRequestByID = (id) => {
  return new Promise((resolve, reject) => {
    const storeMenuMock = menus[id];
    // console.log("storesMenuMock:", storeMenuMock);
    if (!storeMenuMock) {
      reject("not Found");
    }
    resolve(storeMenuMock);
  });
};

export const menuInfoTransformed = ({ results = [] }) => {
  const mappedResult = results.map((menu) => {
    return {
      ...menu,
    };
  });
  return camelize(mappedResult);
};

export const storesInfoTransformed = ({ results = [] }) => {
  const mappedResult = results.map((store) => {
    return {
      ...store,
    };
  });
  return camelize(mappedResult);
};
