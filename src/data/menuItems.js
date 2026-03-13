import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizza.jpg";
import pasta from "../assets/images/pasta.jpg";
import fries from "../assets/images/fries.jpg";
import salad from "../assets/images/salad.jpg";
import wine from "../assets/images/wine.jpg";
import beer from "../assets/images/beer.jpg";
import coke from "../assets/images/coke.jpg";

export const menuItems = [
  {
    id: 1,
    name: "Burger",
    price: 8.5,
    image: burger,
    category: "Main"
  },
  {
    id: 2,
    name: "Pizza",
    price: 12,
    image: pizza,
    category: "Main"
  },
  {
    id: 3,
    name: "Pasta",
    price: 14,
    image: pasta,
    category: "Main"
  },
  {
    id: 4,
    name: "Fries",
    price: 3,
    image: fries,
    category: "Sides"
  },
  {
    id: 5,
    name: "Salad",
    price: 6.5,
    image: salad,
    category: "Sides"
  },
  {
    id: 6,
    name: "Wine",
    price: 10,
    image: wine,
    category: "Drinks"
  },
  {
    id: 7,
    name: "Beer",
    price: 5,
    image: beer,
    category: "Drinks"
  },
  {
    id: 8,
    name: "Coke",
    price: 2.5,
    image: coke,
    category: "Drinks"
  }
];