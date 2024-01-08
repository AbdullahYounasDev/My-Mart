import Milk from "../Images/milk.png";
import Vegetables from "../Images/vegetables.png";
import Fruits from "../Images/fruits.png";
import Meat from "../Images/meat.png";
const Categorie = [
  {
    id: 1,
    ImgPath: Milk,
    heading: "Milk",
    top: true,
  },
  {
    id: 2,
    ImgPath: Vegetables,
    heading: "Vegetables",
    top: true,
  },
  {
    id: 3,
    ImgPath: Fruits,
    heading: "Fruits",
    top: true,
  },
  {
    id: 4,
    ImgPath: Meat,
    heading: "Meat",
    top: true,
  },
  // {
  //   id: 5,
  //   ImgPath: Vegetables,
  //   heading: "Vegetables",
  //   top: false,
  // },
  // {
  //   id: 6,
  //   ImgPath: Fruits,
  //   heading: "Fruits",
  //   top: false,
  // },
  // {
  //   id: 7,
  //   ImgPath: Meat,
  //   heading: "Meat",
  //   top: false,
  // },
];
Categorie.reverse();
export default Categorie;
