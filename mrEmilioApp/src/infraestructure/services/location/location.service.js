import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    // `http://10.0.2.2:5001/mremilio-b84c7/us-central1/geolocation?city=${searchTerm}`
    `https://us-central1-mremilio-b84c7.cloudfunctions.net/geolocation?city=${searchTerm}`
  )
    .then((res) => {
      if (!res) {
        return "No hay tiendas en esta área";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
