function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shop-navbar px-3 shadow">
      <div className="container-fluid">

        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <span className="brand-icon">🛒</span>
          <span>Shopping List</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-1">

            <li className="nav-item">
              <a className="nav-link active rounded-3 px-3" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link rounded-3 px-3" href="#">
                Items
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link rounded-3 px-3" href="#">
                About
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Header;