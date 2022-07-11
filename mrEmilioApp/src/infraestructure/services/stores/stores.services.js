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
  return fetch(
    // `http://10.0.2.2:5001/mremilio-b84c7/us-central1/stores?city=${searchTerm}`
    `https://us-central1-mremilio-b84c7.cloudfunctions.net/stores?city=${searchTerm}`
  )
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
  return fetch(
    // `http://10.0.2.2:5001/mremilio-b84c7/us-central1/storesMenus?storeId=${id}`
    `https://us-central1-mremilio-b84c7.cloudfunctions.net/storesMenus?storeId=${id}`
  )
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
