export const productsRequest = () => {
  return fetch(`https://us-central1-mremilio-b84c7.cloudfunctions.net/products`)
    .then((res) => {
      if (!res) {
        return "No hay productos";
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
