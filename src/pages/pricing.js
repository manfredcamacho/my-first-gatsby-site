import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Pricing = () => {
  return (
    <Layout>
      <div className="container-lg py-5">
        <div className="col-md-12 m-auto text-center py-5 tc-theme-white">
          <h1 className="pricing-header h2 semi-bold-600 ">
            Tenemos planes para todos
          </h1>
        </div>

        <div className="row px-lg-3">
          <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
            <div className="pricing-table card h-100 shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body rounded-pill text-center align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package tc-theme-pink"></i>
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Starter Pack
                </h2>
                <p>Desde $20.000</p>
                <ul className="pricing-table-body text-start text-dark px-4 list-unstyled light-300">
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Decoracion LED
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Decoracion LED
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>RGB
                    Tower
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>RGB
                    Desktop
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Sincronizacion con PC
                  </li>
                </ul>
                <div className="pricing-table-footer pt-5">
                  <a href="#" className="btn  px-4 btn-primary light-300">
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-sm-0 pt-3 px-xl-3">
            <div className="pricing-table card h-100 card-rounded shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body text-center align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package tc-theme-pink py-3"></i>
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Gamer Pack
                </h2>
                <p>Desde $50.000</p>
                <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Decoracion LED
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Decoracion LED
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>RGB
                    Tower
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>RGB
                    Desktop
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Sincronizacion con PC
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Luces
                    inteligentes
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Armado
                    de Setup Completo
                  </li>
                </ul>
                <div className="pricing-table-footer pt-5 pb-2">
                  <a href="#" className="btn px-4 btn-primary light-300">
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 pb-5 pt-sm-0 mt-5 px-xl-3">
            <div className="pricing-table card h-100 shadow-sm border-0 py-5">
              <div className="pricing-table-body card-body text-center align-self-center p-md-0">
                <i className="pricing-table-icon display-3 bx bx-package tc-theme-pink"></i>
                <h2 className="pricing-table-heading h5 semi-bold-600">
                  Pro Gamer Pack
                </h2>
                <p>Desde $120.000</p>
                <ul className="pricing-table-list text-start text-dark px-4 list-unstyled light-300">
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Gamer
                    Pack
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Compra
                    de componentes
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Rediseño
                    habitacion
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>Muebles
                    personalizados
                  </li>
                  <li>
                    <i className="bx bxs-circle tc-theme-pink me-2"></i>
                    Decoracion
                  </li>
                </ul>
                <div className="pricing-table-footer pt-1">
                  <a href="#" className="btn px-4 btn-primary light-300">
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-light pt-sm-0 py-5">
        <div className="container py-5">
          <h1 className="h2 semi-bold-600 text-center mt-2">
            Setups Prediseñados
          </h1>
          <p className="text-center pb-5 light-300">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            facilisis.
          </p>

          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white mb-5">
            <div className="pricing-horizontal-icon col-md-3 text-center text-light">
              <StaticImage
                className="card-img-top"
                src="../images/setup-01.jpg"
                alt="..."
              />
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <h2 className="h5 semi-bold-600">Minimalistic Pack</h2>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>Desde $150.000</p>
                <a href="#" className="btn px-4 btn-primary mb-3">
                  Cotizar
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white mb-5">
            <div className="pricing-horizontal-icon col-md-3 text-center text-light">
              <StaticImage
                className="card-img-top"
                src="../images/setup-02.jpg"
                alt="..."
              />
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <h2 className="h5 semi-bold-600">Dual monitor Pack</h2>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>Desde $250.000</p>
                <a href="#" className="btn px-4 btn-primary mb-3">
                  Cotizar
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white mb-5">
            <div className="pricing-horizontal-icon col-md-3 text-center text-light">
              <StaticImage
                className="card-img-top"
                src="../images/setup-03.jpg"
                alt="..."
              />
            </div>
            <div className="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
              <h2 className="h5 semi-bold-600">Triple monitor Pack</h2>
            </div>
            <div className="pricing-horizontal-tag col-md-4 text-center pt-3 d-flex align-items-center">
              <div className="w-100 light-300">
                <p>Desde $350.000</p>
                <a href="#" className="btn px-4 btn-primary mb-3">
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Precios"
    description="¿Quieres un setup gamer personalizado sin romper el banco? En nuestra empresa, ofrecemos precios competitivos sin sacrificar la calidad. ¡Haz realidad tus sueños de juego sin preocupaciones financieras! Contáctanos para conocer nuestras opciones de precios. #gaming #personalizado #precioscompetitivos"
  />
);

export default Pricing;
