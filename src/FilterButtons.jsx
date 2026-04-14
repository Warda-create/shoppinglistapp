function FilterButtons({ filter, setFilter }) {
  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="btn-group shadow-sm" role="group">

        
        <button
          className={`btn btn-sm px-4 fw-semibold filter-tab 
          ${filter === "all" ? "btn-primary active" : "btn-outline-primary"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        
        <button
          className={`btn btn-sm px-4 fw-semibold filter-tab 
          ${filter === "pending" ? "btn-warning active" : "btn-outline-warning"}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>

        
        <button
          className={`btn btn-sm px-4 fw-semibold filter-tab 
          ${filter === "bought" ? "btn-success active" : "btn-outline-success"}`}
          onClick={() => setFilter("bought")}
        >
          ✔ Bought
        </button>

      </div>
    </div>
  );
}

export default FilterButtons;