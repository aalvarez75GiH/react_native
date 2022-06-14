import arequipe_picture from "../../../../assets/pictures/Arequipe.jpg";
import crema_picture from "../../../../assets/pictures/crema.jpg";
import suero_picture from "../../../../assets/pictures/suero.jpg";
import tequeños_picture from "../../../../assets/pictures/tequenos.jpg";
import salsas_picture from "../../../../assets/pictures/salsas.jpg";

export const products = [
  {
    name: "Arequipe",
    description:
      "Crema acaramelada en base a leche perfecta para galletas, obleas y mucho más",
    price: 12,
    stock: 5,
    size: "32oz",
    quantity: "1",
    picture: arequipe_picture,
    rating: 4,
    id: "p0001",
  },
  {
    name: "Crema de leche",
    description:
      "Créma en base a leche, salada y perfecta para comer con huevos y arepas",
    price: 12,
    stock: 5,
    size: "8oz",
    quantity: "1",
    picture: crema_picture,
    rating: 4,
    id: "p0002",
  },
  {
    name: "Suero de leche",
    description:
      "Créma en base a leche, salada y perfecta para comer con huevos y arepas",
    price: 12,
    stock: 5,
    size: "32oz",
    quantity: "1",
    picture: suero_picture,
    rating: 5,
    id: "p0003",
  },
  {
    name: "Tequéños",
    description:
      "Pequeños envoltorios de ojáldre rellenos con exquisito quéso, perfecto para picar",
    price: 12,
    stock: 5,
    size: "1.20oz",
    quantity: "24",
    picture: tequeños_picture,
    rating: 3,
    id: "p0004",
  },
  {
    name: "Salsas",
    description: "Salsas de Ájo, Maíz y tocineta",
    price: 12,
    stock: 5,
    size: "8oz",
    quantity: "3",
    picture: salsas_picture,
    rating: 2,
    id: "p0005",
  },
];
