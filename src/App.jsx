import "./styles/index.css";
import { useState } from "react";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Item from "./components/Item";

/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/

const initialItems = [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.35,
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.2,
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.55,
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.7,
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.8,
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.25,
  },
  {
    id: "007-bell-pepper",
    name: "bell-pepper",
    price: 0.5,
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.45,
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.55,
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.4,
  },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [cartItems, setCartItems] = useState(cartItems);

  return (
    <div className="App">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      <Header items={items} cartItems={cartItems} />
      <Main cartItems={cartItems}/> 
    </div>
  );
}
