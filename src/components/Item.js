function Item({ item }) {
    return (
        <img
          className="store--item-icon"
          src={`assets/icons/${item.id}.svg`}
          alt={item.name}
        />
    );
  }
  
  export default Item;
  