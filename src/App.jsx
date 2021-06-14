import "./styles/index.css";
import { useEffect, useState } from "react";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import AddStoreItem from "./components/AddStoreItem";

/* 
Your store item should have the following structure

{
  id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 <- You can come up with your own prices
}

*/

// const initialItems = [
//   {
//     id: "001-beetroot",
//     name: "beetroot",
//     price: 0.35,
//   },
//   {
//     id: "002-carrot",
//     name: "carrot",
//     price: 0.2,
//   },
//   {
//     id: "003-apple",
//     name: "apple",
//     price: 0.55,
//   },
//   {
//     id: "004-apricot",
//     name: "apricot",
//     price: 0.7,
//   },
//   {
//     id: "005-avocado",
//     name: "avocado",
//     price: 0.8,
//   },
//   {
//     id: "006-bananas",
//     name: "bananas",
//     price: 0.25,
//   },
//   {
//     id: "007-bell-pepper",
//     name: "bell-pepper",
//     price: 0.5,
//   },
//   {
//     id: "008-berry",
//     name: "berry",
//     price: 0.45,
//   },
//   {
//     id: "009-blueberry",
//     name: "blueberry",
//     price: 0.55,
//   },
//   {
//     id: "010-eggplant",
//     name: "eggplant",
//     price: 0.4,
//   },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((resp) => resp.json())
      .then((itemsFromServer) => setItems(itemsFromServer));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      title: todoInput,
    };
  }

  function addItemToStore() {
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw Error("Failed to create new item.");
        }
      })
      .then((newItemFromServer) => {
        setItems([...items, newItemFromServer]);
      });
  }

  function addToCart(itemId) {
    // EITHER THE ITEM IS ALREADY IN THE CART, OR NOT

    const foundItem = cartItems.find((cartItem) => cartItem.id === itemId);

    // IF THE ITEM IS IN THE CART
    if (foundItem !== undefined) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCartItems(updatedCart);
    } else {
      // WE HERE KNOW THE ITEMS IS NOT IN THE CART
      const newCartItem = {
        id: itemId,
        quantity: 1,
      };

      setCartItems([...cartItems, newCartItem]);
    }
  }

  function removeFromCart(itemId) {
    // EITHER THERE IS ONLY 1 LEFT IN THE CART, OR MORE

    const foundItem = cartItems.find((cartItem) => cartItem.id === itemId);

    if (foundItem.quantity === 1) {
      // REMOVE FROM THE CART
      const updatedCart = cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      setCartItems(updatedCart);
    } else {
      // DECREASE QUANTITY
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );

      setCartItems(updatedCart);
    }
  }

  // DUPLICATE DATA ❌ WE CAN DERIVE THIS
  // const [total, setTotal] = useState(0);

  // What is the total to pay?
  // for each cart item we add the price * quantity
  let total = 0;

  for (const cartItem of cartItems) {
    const storeItem = items.find((storeItem) => storeItem.id === cartItem.id);
    total += cartItem.quantity * storeItem.price;
  }

  return (
    <div className="App">
      <Header items={items} addToCart={addToCart} />
      <Main
        items={items}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        total={total}
      />
      <AddStoreItem addItemToStore={addItemToStore} />
    </div>
  );
}
