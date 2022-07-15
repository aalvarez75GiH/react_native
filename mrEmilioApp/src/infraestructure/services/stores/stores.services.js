import camelize from "camelize";
import { host } from "../../../util/env";

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
  return fetch(`${host}/stores?city=${searchTerm}`)
    .then((res) => {
      if (!res) {
        return "No hay tiendas en esta ciudad";
      }
      console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const storeMenuRequestByID = (id) => {
  return fetch(`${host}/storesMenus?storeId=${id}`)
    .then((res) => {
      if (!res) {
        return "No hay tiendas en esta ciudad";
      }
      console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.log(error);
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
