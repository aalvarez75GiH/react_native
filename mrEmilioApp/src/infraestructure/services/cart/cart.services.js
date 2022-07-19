import { host } from "../../../util/env";

export const companyDataRequest = () => {
  return fetch(`${host}/companyInfo`)
    .then((res) => {
      if (!res) {
        return "No hay info";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
