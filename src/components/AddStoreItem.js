function AddStoreItem() {
  return (
    <div>
      <h2>Staff Only</h2>
      <h3>Add new item to store</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id"> </label>
        <input
          type="text"
          name="id"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <label htmlFor="name"> </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <label htmlFor="price"> </label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        ></input>
        <button type="submit" onSubmit={() => addItemToStore}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStoreItem;
