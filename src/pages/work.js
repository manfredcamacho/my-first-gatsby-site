import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Work = () => {
  return (
    <Layout>
      <div id="work_banner" className="banner-wrapper bg-light w-100 py-5">
        <div className="banner-vertical-center-work container text-light d-flex justify-content-center align-items-center py-5 p-0">
          <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
            <h1 className="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center">
              Nuestros Trabajos
            </h1>
            <h3 className="h4 pb-2 regular-400">
              Elit, sed do eiusmod tempor incididunt
            </h3>
            <p className="banner-body pb-2 light-300">
              Vector illustration{" "}
              <a
                className="text-white"
                href="http://freepik.com/"
                target="_blank"
              >
                Freepik
              </a>
              . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus.
            </p>
            <Link to="/contact">
              <button
                type="submit"
                className="btn px-4 me-4 light-300 neon-link"
              >
                Consultas
              </button>
            </Link>
            <Link to="/about">
              <button type="submit" className="btn px-4 light-300 neon-link">
                Quienes Somos
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-light py-5">
        <div className="feature-work container my-4">
          <div className="row d-flex d-flex align-items-center">
            <div className="col-lg-5">
              <h3 className="feature-work-title h4 text-muted light-300">
                Trabajos Destacados
              </h3>
              <h1 className="feature-work-heading h2 py-3 semi-bold-600">
                Creamos soluciones que se adaptan a vos
              </h1>
              <p className="feature-work-body text-muted light-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p className="feature-work-footer text-muted light-300">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6 offset-lg-1 align-left">
              <StaticImage
                className="img-fluid"
                src="../images/feature-work-1.jpg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row projects gx-lg-5">
          <a
            href="#"
            className="col-sm-6 col-lg-4 text-decoration-none project marketing social business"
          >
            <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
              <StaticImage
                className="card-img-top"
                src="../images/setup-01.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">Minimalistic</h5>
                <p className="card-text light-300 text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolor.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="col-sm-6 col-lg-4 text-decoration-none project graphic social"
          >
            <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
              <StaticImage
                className="card-img-top"
                src="../images/setup-02.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">Dual Monitor</h5>
                <p className="card-text light-300 text-dark">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic business"
          >
            <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
              <StaticImage
                className="card-img-top"
                src="../images/setup-03.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">
                  Triple Monitor
                </h5>
                <p className="card-text light-300 text-dark">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiatdolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="col-sm-6 col-lg-4 text-decoration-none project social business"
          >
            <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
              <StaticImage
                className="card-img-top"
                src="../images/setup-04.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">
                  Large Monitor
                </h5>
                <p className="card-text light-300 text-dark">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </a>
          <a
            href=""
            className="col-sm-6 col-lg-4 text-decoration-none project marketing"
          >
            <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
              <StaticImage
                className="card-img-top"
                src="../images/setup-05.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">Duo</h5>
                <p className="card-text light-300 text-dark">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </a>
          <a
            href=""
            className="col-sm-6 col-lg-4 text-decoration-none project marketing graphic"
          >
            <div className="service-work overflow-hidden card mx-5 mx-sm-0 mb-5">
              <StaticImage
                className="card-img-top"
                src="../images/setup-06.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title light-300 text-dark">Big Screen</h5>
                <p className="card-text light-300 text-dark">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Nuestros Trabajos"
    description="Descubre nuestros increíbles setups gamers personalizados en la sección 'Nuestros trabajos'. Cada configuración única refleja la pasión y la atención al detalle que ponemos en cada proyecto. ¡Inspírate y lleva tu experiencia de juego al siguiente nivel con nosotros! #gaming #personalizado"
  />
);

export default Work;
