import '../styles/cart-item.css'
import Item from './Item';

function CartItem({cartItems, item}) {
  console.log(cartItems)

  return (
    <li>
      <Item item={item}/>
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center">-</button>
      <span className="quantity-text center">1</span>
      <button className="quantity-btn add-btn center">+</button>
    </li>
  );
}


export default CartItem
