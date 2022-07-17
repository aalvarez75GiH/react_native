const arequipe_picture =
  "https://sh3ck-s3-bucket.s3.amazonaws.com/images/mrEmilio/whiteBG_arequipe.png";
const crema_picture =
  "https://sh3ck-s3-bucket.s3.amazonaws.com/images/mrEmilio/whiteBG_crema.png";
const suero_picture =
  "https://sh3ck-s3-bucket.s3.amazonaws.com/images/mrEmilio/whiteBG_suero.png";
const tequeños_picture =
  "https://sh3ck-s3-bucket.s3.amazonaws.com/images/mrEmilio/diagonalFace_tequenos.png";
const salsas_picture =
  "https://sh3ck-s3-bucket.s3.amazonaws.com/images/mrEmilio/whiteBG_salsas.png";

module.exports.products = [
  {
    name: "Arequipe",
    description:
      "Crema acaramelada en base a leche perfecta para galletas, obleas y mucho más",
    price: 1200,
    stock: 5,
    size: "32oz",
    quantity: 1,
    picture: arequipe_picture,
    rating: 4,
    id: "p0001",
  },
  {
    name: "Crema de leche",
    description:
      "Créma en base a leche, salada y perfecta para comer con huevos y arepas",
    price: 900,
    stock: 5,
    size: "8oz",
    quantity: 1,
    picture: crema_picture,
    rating: 4,
    id: "p0002",
  },
  {
    name: "Suero de leche",
    description:
      "Créma en base a leche, salada y perfecta para comer con huevos y arepas",
    price: 700,
    stock: 5,
    size: "32oz",
    quantity: 1,
    picture: suero_picture,
    rating: 5,
    id: "p0003",
  },
  {
    name: "Tequéños",
    description:
      "Pequeños envoltorios de ojáldre rellenos con exquisito quéso, perfecto para picar",
    price: 1600,
    stock: 6,
    size: "1.20oz",
    quantity: 1,
    picture: tequeños_picture,
    rating: 3,
    id: "p0004",
  },
  {
    name: "Salsas",
    description: "Salsas de Ájo, Maíz y tocineta",
    price: 400,
    stock: 8,
    size: "8oz",
    quantity: 1,
    picture: salsas_picture,
    rating: 2,
    id: "p0005",
  },
];
