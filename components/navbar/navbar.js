import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import userApi from "../../pages/api/user";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function apiCall() {
        if(await userApi.isLoggedIn()) {
          setIsLoggedIn(true);
        } else setIsLoggedIn(false);
    }
    apiCall();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push("/login");
  }

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
            {isLoggedIn ? (
              <li class="nav-item">
                <a class="nav-link" onClick={logout} style={{cursor: "pointer"}}>
                  Logout
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}
