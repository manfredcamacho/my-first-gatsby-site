import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout>
      <div className="banner-wrapper">
        <div
          id="index_banner"
          className="banner-vertical-center-index container-fluid pt-5"
        >
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 tc-theme-white display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Hacemos realidad el setup de tus sueños
                    </h1>
                    <p className="banner-body tc-theme-white py-3 mx-0 px-0">
                      5 años de experiencia en el armado de setups gamers
                      personalizados.
                    </p>
                    <Link
                      className="banner-button btn btn-lg px-4 neon-link"
                      to="/work"
                    >
                      Ver Trabajos
                    </Link>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 tc-theme-white display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Somos expertos en precios
                    </h1>
                    <p className="banner-body tc-theme-white py-3">
                      Armamos un presupuesto a la medida de tu bolsillo siempre
                      buscando el mejor precio para el armado de tu setup gamer.
                    </p>
                    <Link
                      className="banner-button btn  btn-lg px-4 neon-link"
                      to="/pricing"
                    >
                      Ver Precios
                    </Link>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="py-5 row d-flex align-items-center">
                  <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                    <h1 className="banner-heading h1 tc-theme-white display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Nuestros clientes satisfechos son nuestra garantía
                    </h1>
                    <p className="banner-body tc-theme-white py-3">
                      Sabemos que no es fácil armar un setup gamer, por eso te
                      ofrecemos garantía de un año ante fallos.
                    </p>
                    <Link
                      className="banner-button btn btn-lg px-4 neon-link"
                      to="/about"
                    >
                      Sobre Nosotros
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev text-decoration-none"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <i className="bx bx-chevron-left"></i>
              <span className="visually-hidden">Ant.</span>
            </a>
            <a
              className="carousel-control-next text-decoration-none"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <i className="bx bx-chevron-right"></i>
              <span className="visually-hidden">Prox.</span>
            </a>
          </div>
        </div>
      </div>

      <section className="container overflow-hidden py-5 tc-theme-white">
        <h2 className="h2 text-center col-12 py-5 semi-bold-600">Tematicas</h2>
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
          <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-01.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-02.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-03.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-04.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-05.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-06.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-07.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
            <a
              href="#"
              className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
            >
              <StaticImage
                className="card-img"
                src="../images/setup-08.jpg"
                alt="Card image"
              />
              <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                <div className="service-work-content text-left text-light">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Game Station" />;

export default IndexPage;
