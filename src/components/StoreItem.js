import "../styles/store-item.css";

function StoreItem({item, addToCart}) {
  return (
    <li key={item.id}>
      <div className="store--item-icon">
      <img 
          src={`./assets/icons/${item.id}.svg`}
          alt={item.name}
         /> 
      </div>
      <button onClick={() => {
                  addToCart(item.id)
      }}>Add to cart</button> 
    </li>
  )
}

export default StoreItem;
