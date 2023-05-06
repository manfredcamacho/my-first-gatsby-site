import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <nav id="main_nav" className="navbar navbar-expand-lg navbar-dark shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <span className="tc-theme-white h3 neonText-red">Game</span>
          <i className="bx bx-joystick bx-sm tc-theme-white"></i>
          <span className="tc-theme-white neonText-blue h3">Station</span>
        </Link>

        <button
          className="navbar-toggler border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler-success"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon tc-theme-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-toggler-success">
          <div className="flex-fill mx-xl-5 mb-2">
            <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link px-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link px-3">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work" className="nav-link px-3">
                  Trabajos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link px-3">
                  Precios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link px-3">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
