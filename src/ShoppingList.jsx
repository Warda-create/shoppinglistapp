import ShoppingItem from "./ShoppingItem";

function ShoppingList({ lists, deleteItem, toggleItem }) {
  return (
    <div>
      {lists.length === 0 ? (
        <div className="text-center py-5">
          <div style={{ fontSize: "2.5rem" }}>🧺</div>
          <p className="text-secondary mt-2 mb-0">No items yet. Add your first one above!</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-2">
          {lists.map((singleItem, index) => (
            <div
              key={index}
              className={`shop-card card border-0 shadow-sm rounded-4 ${singleItem.bought ? "item-bought" : ""}`}
            >
              <div className="card-body p-3 d-flex justify-content-between align-items-center gap-3">

                <div className="d-flex align-items-center gap-3 flex-grow-1 min-w-0">
                  <span className={`item-number badge rounded-pill px-2 py-1 fw-semibold ${singleItem.bought ? "bg-success bg-opacity-10 text-success" : "bg-success bg-opacity-10 text-success"}`}>
                    #{index + 1}
                  </span>
                  <span className={`item-name flex-grow-1 ${!singleItem.bought ? "item-strikethrough text-muted" : "fw-semibold"}`}>
                    {singleItem.name}
                  </span>
                </div>

                <ShoppingItem
                  deleteItem={deleteItem}
                  index={index}
                  toggleItem={toggleItem}
                  item={singleItem}
                />

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;