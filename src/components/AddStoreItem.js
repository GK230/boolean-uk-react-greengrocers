function AddStoreItem({handleSubmit, newItem}) {
  return (
    <div>
      <h2>Staff Only</h2>
      <h3>Add new item to store</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newItem.name}
        //   onChange={(e) => newItem(e.target.name)}
        ></input>
        <label htmlFor="price"> </label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newItem.price}
        //   onChange={(e) => newItem(e.target.price)}
        ></input>
        <button type="submit" onSubmit={() => addItemToStore}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStoreItem;
