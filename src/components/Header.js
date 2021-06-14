import StoreItem from '../components/StoreItem'

function Header(items, cartItems) {
   
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {
          items.items.map(item => (<StoreItem item={item}/>))
        }
      </ul>
    </header>
  );
}

export default Header
