import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className="bg-theme-secondary pt-4">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-3 col-12 align-left">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <span className="tc-theme-white h3 neonText-red">Game</span>
              <i className="bx bx-joystick bx-sm tc-theme-white"></i>
              <span className="tc-theme-white neonText-blue h3">Station</span>
            </Link>
            <p className="text-light my-lg-4 my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <ul className="list-inline footer-icons light-300">
              <li className="list-inline-item m-0">
                <a
                  className="text-light"
                  target="_blank"
                  href="http://facebook.com/"
                >
                  <i className="bx bxl-facebook-square bx-md"></i>
                </a>
              </li>
              <li className="list-inline-item m-0">
                <a
                  className="text-light"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  <i className="bx bxl-linkedin-square bx-md"></i>
                </a>
              </li>
              <li className="list-inline-item m-0">
                <a
                  className="text-light"
                  target="_blank"
                  href="https://www.whatsapp.com/"
                >
                  <i className="bx bxl-whatsapp-square bx-md"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h3 className="h4 pb-lg-3 text-light light-300">Nuestro Estudio</h3>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <Link className="text-decoration-none text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <Link
                  className="text-decoration-none text-light py-1"
                  to="/about"
                >
                  Nosotros
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <Link
                  className="text-decoration-none text-light py-1"
                  to="/work"
                >
                  Trabajos
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <Link
                  className="text-decoration-none text-light py-1"
                  to="/pricing"
                >
                  Precios
                </Link>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <Link
                  className="text-decoration-none text-light py-1"
                  to="/contact"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Trabajos</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Marcas
                </a>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Diseños
                </a>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Presuestos
                </a>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Temáticas
                </a>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bxs-chevron-right bx-xs"></i>
                <a className="text-decoration-none text-light py-1" href="#">
                  Garantías
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
            <h2 className="h4 pb-lg-3 text-light light-300">Atendemos en:</h2>
            <ul className="list-unstyled text-light light-300">
              <li className="pb-2">
                <i className="bx-fw bx bx-phone bx-xs"></i>
                <a
                  className="text-decoration-none text-light py-1"
                  href="tel:010-020-0340"
                >
                  021-2354-4568
                </a>
              </li>
              <li className="pb-2">
                <i className="bx-fw bx bx-mail-send bx-xs"></i>
                <a
                  className="text-decoration-none text-light py-1"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 bg-theme-secondary py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-start text-center text-light light-300">
                © Copyright 2021 Game Station. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="text-lg-end text-center text-light light-300">
                Diseñado por{" "}
                <a
                  rel="sponsored"
                  className="text-decoration-none text-light"
                  href="https://cursophp.com.ar/"
                  target="_blank"
                >
                  <strong>CAC FullStack </strong>
                </a>
                - Personalizado por{" "}
                <strong>{data.site.siteMetadata.author}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
