import CartItem from "./CartItem";

function Main({ items, cartItems, addToCart, removeFromCart, total }) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((cartItem) => {
          const item = items.find(function (item) {
            return item.id === cartItem.id
          })
            return (
              <CartItem
                item={item}
                cartItem={cartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{total.toFixed(2)}</span>
        </div>
      </div>
    </main>
  );
}

export default Main;
