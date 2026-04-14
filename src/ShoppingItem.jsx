function ShoppingItem({ deleteItem, index, toggleItem, item }) {
  return (
    <div className="d-flex gap-2 flex-shrink-0">

      <button
        className={`btn btn-sm rounded-3 px-3 fw-semibold ${item.bought ? "btn-outline-warning" : "btn-outline-success"}`}
        onClick={() => toggleItem(index)}
        title="Toggle status"
      >
        {item.bought ? "↩ Pending" : "✔ Bought"}
      </button>

      <button
        className="btn btn-sm btn-outline-danger rounded-3 px-3"
        onClick={() => deleteItem(index)}
        title="Delete item"
      >
        🗑
      </button>

    </div>
  );
}

export default ShoppingItem;