import StoreItem from "../components/StoreItem";

function Header({ items, addToCart }) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {items.map((item) => (
          <StoreItem item={item} addToCart={addToCart} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
