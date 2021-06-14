import "../styles/cart-item.css";

function CartItem({ item, cartItem, addToCart, removeFromCart }) {
  return (
    <li key={item.id}>
      <img
        class="cart--item-icon"
        src={`./assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          removeFromCart(cartItem.id);
        }}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => {
          addToCart(cartItem.id);
        }}
      >
        +
      </button>
    </li>
  );
}

export default CartItem;
