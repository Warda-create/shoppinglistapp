function AddItem({ list, setList, addList }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body p-3 p-md-4">

        <label className="form-label small fw-semibold text-secondary mb-2">
          Add new item
        </label>

        <div className="input-group">
          <span className="input-group-text bg-body-secondary border-end-0 text-secondary">
            🛍️
          </span>
          <input
            className="form-control border-start-0 ps-0"
            type="text"
            placeholder="e.g. Milk, Eggs, Bread..."
            value={list}
            onChange={(e) => setList(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addList()}
          />
          <button
            className="btn btn-success fw-semibold px-4"
            onClick={addList}
          >
            ＋ Add
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddItem;