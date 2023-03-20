export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a class="navbar-brand" href="#">
          Road Guardian
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Citizen Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Police Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Hospital Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ambulance Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                PWD B&R Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
