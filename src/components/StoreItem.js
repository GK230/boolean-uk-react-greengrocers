import '../styles/store-item.css'
import Item from '../components/Item'

function StoreItem(item, cartItems) {

  function addItemToCart() {
    const cartItem = item
    cartItems = {...cartItems, cartItem}
  }

  return (

    <li>
      <div className="store--item-icon">
      <p>{item.item.name}</p>
        <Item item={item}/>
      </div>
      <button
      onClick={addItemToCart}
      >Add to cart</button>
    </li>
  );
}


export default StoreItem
