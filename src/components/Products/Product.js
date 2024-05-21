/** @format */

import Apple from "../Images/Apple.jpg";
import Banana from "../Images/Banana.jpg";
import Butter from "../Images/Butter.jpg";
import Cabbage from "../Images/Cabbage.jpg";
import ChickenThai from "../Images/Chicken-Thai.jpg";
import FullChicken from "../Images/Full Chicken.jpg";
import FullKgMeat from "../Images/Full Kg Meat.jpg";
import OneKgFish from "../Images/One Kg Fish.jpg";
import HalgKgFish from "../Images/Half Kg Fish.jpg";
import HalgKgMeat from "../Images/Half Kg Meat.jpg";
import LegPieces from "../Images/leg Pieces.jpg";
import Mango from "../Images/Mango.jpg";
import Milk from "../Images/Milk one.jpg";
import Onion from "../Images/Onion.jpg";
import Peach from "../Images/Peach.jpg";
import Potato from "../Images/Potato.jpg";
import Shrimp from "../Images/Shrimp.jpg";
import Tomato from "../Images/Tomato.jpg";

const Product = [
  {
    id: 1,
    ImgPath: Apple,
    heading: "Apple",
    price: 120,
    featured: false,
    categorie: "Fruits",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 2,
    ImgPath: FullKgMeat,
    heading: "Meat",
    price: 400,
    featured: true,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 3,
    ImgPath: Banana,
    heading: "Banana",
    price: 140,
    featured: true,
    categorie: "Fruits",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },

  {
    id: 4,
    ImgPath: ChickenThai,
    heading: "Chicken Thai",
    price: 150,
    featured: false,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 5,
    ImgPath: Cabbage,
    heading: "Cabbage",
    price: 150,
    featured: true,
    categorie: "Vegetables",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 6,
    ImgPath: FullChicken,
    heading: "Full Chicken",
    price: 250,
    featured: true,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 7,
    ImgPath: Butter,
    heading: "Butter",
    price: 100,
    featured: true,
    categorie: "Milk",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 8,
    ImgPath: HalgKgFish,
    heading: "Half Kg Fish",
    price: 220,
    featured: false,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 9,
    ImgPath: HalgKgMeat,
    heading: "Half Kg Meat",
    price: 200,
    featured: false,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 10,
    ImgPath: Milk,
    heading: "Milk",
    price: 70,
    featured: true,
    categorie: "Milk",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 11,
    ImgPath: Onion,
    heading: "Onion",
    price: 40,
    featured: false,
    categorie: "Vegetables",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 12,
    ImgPath: Peach,
    heading: "Peach",
    price: 70,
    featured: false,
    categorie: "Fruits",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 13,
    ImgPath: Shrimp,
    heading: "Shrimp",
    price: 170,
    featured: true,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 14,
    ImgPath: Potato,
    heading: "Potato",
    price: 30,
    featured: true,
    categorie: "Vegetables",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 15,
    ImgPath: LegPieces,
    heading: "7 Leg Pieces",
    price: 190,
    featured: false,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 16,
    ImgPath: Mango,
    heading: "Mango",
    price: 60,
    featured: true,
    categorie: "Fruits",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 17,
    ImgPath: OneKgFish,
    heading: "1 kg Fish",
    price: 160,
    featured: true,
    categorie: "Meat",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
  {
    id: 18,
    ImgPath: Tomato,
    heading: "Tomato",
    price: 120,
    featured: false,
    categorie: "Vegetables",

    smallDes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, harum dolorum. Aspernatur, assumenda quisquam quaerat porro quia magni eum rerum fuga molestiae impedit fugit dolor similique omnis ratione sequi. Repellat.",
  },
];
Product.reverse();
export default Product;
