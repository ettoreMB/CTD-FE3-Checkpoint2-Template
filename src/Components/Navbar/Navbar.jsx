import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";
import { ThemeContext } from "../../context/theme-context";

const Navbar = () => {
  const authContext = useContext(AuthContext)
  const {darkmode,changeTheme} = useContext(ThemeContext)
  const navigate = useNavigate()
  
  
  function handleLogout() {
    authContext.removeData()
    navigate('/login')
  }
  

  const token = localStorage.getItem("@dhOdonto_token")
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  },[])
  return (
    <header className="sticky-top">
   
      <nav
        className={`navbar navbar-expand-sm ${darkmode ? "navbar-dark bg-dark ":"navbar-light bg-light"}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                {token ? 
                <button
                  className={`btn btn-light ${styles.button
                    }`}
                  onClick={handleLogout}

                >
                  logout
                </button> : 
                <Link className="nav-link" to="/login">Login</Link>}
               

              </li>
              <li className={`nav-item`}>
                <button
                  className={`${darkmode ? "btn-dark": "btn btn-light"} ${styles.btnStyle
                    }`}
                  onClick={changeTheme}
                >
                  {darkmode ? "☀" :"🌙"}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
