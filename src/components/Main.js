import CartItem from './CartItem'

function Main({cartItems}) {
  console.log(cartItems)
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div class="cart--item-list-container">
        <ul class="item-list cart--item-list">
        {
          cartItems.items.map(item => (<CartItem item={item}/>))
        }        
        </ul>
      </div>
      <div class="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span class="total-number">£0.00</span>
        </div>
      </div>
    </main>
  );
}

export default Main
