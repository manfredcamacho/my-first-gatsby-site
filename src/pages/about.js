import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-light w-100">
        <div className="container">
          <div className="row d-flex align-items-center py-5">
            <div className="col-lg-4 text-start">
              <h1 className="h2 py-5 typo-space-line">Sobre Nosotros</h1>
              <p className="light-300">
                Somos un equipo de profesionales apasionados por el diseño.
                Planeamos desde el dia 1 el diseño de tu nuevo setup.
              </p>
            </div>
            <div className="col-lg-8 overflow-hidden">
              <StaticImage
                src="../images/our-team.jpg"
                alt="Picture with our team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-secondary tc-theme-white py-3">
        <div className="container py-5">
          <h2 className="h2 text-white text-center py-5">
            Que dicen nuestros clientes{" "}
          </h2>
          <div className="row text-center">
            <div className="col-lg-12 row">
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-01.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Lucia Pérez</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-02.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Juana Galán</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-03.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Roberto Ruiz</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-04.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Juan Fitz</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-05.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Carlos Roman</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
              <div className="team-member col-md-2">
                <div className="team-member-img img-fluid rounded-circle p-4">
                  <StaticImage
                    className="rounded-circle"
                    src="../images/customer-06.jpg"
                    alt="Card image"
                  />
                </div>
                <p>
                  <strong>Claudia Ciffro</strong>
                </p>
                <p className="text-start fst-italic">
                  «Illum aliquam suscipit quo at doloremque blanditiis harum
                  praesentium. Repellendus possimus, hic laborum, dolores qui.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-bg bg-white py-5">
        <div className="container my-4">
          <div className="row text-center">
            <div className="objective col-lg-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-theme-secondary shadow-lg">
                <i className="display-4 bx bxs-bulb text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Nuestra Vision
              </h2>
              <p className="light-300">
                Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse commodo viverra.
              </p>
            </div>

            <div className="objective col-lg-4 mt-sm-0 mt-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-theme-secondary shadow-lg">
                <i className="display-4 bx bx-revision text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Nuestra Misión
              </h2>
              <p className="light-300">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis.
              </p>
            </div>

            <div className="objective col-lg-4 mt-sm-0 mt-4">
              <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-theme-secondary shadow-lg">
                <i className="display-4 bx bxs-select-multiple text-light"></i>
              </div>
              <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">
                Nuestra Pasión
              </h2>
              <p className="light-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-bg bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto my-4 p-3">
              <form action="#" method="get">
                <h1 className="h2 text-center">
                  Suscribite a nuestras novedades
                </h1>
                <div className="input-group py-3">
                  <input
                    name="email"
                    type="mail"
                    className="form-control form-control-lg rounded-pill rounded-end"
                    id="email"
                    placeholder="Tu Email"
                    aria-label="Tu Email"
                    required
                  />
                  <button
                    className="btn btn-secondary text-white btn-lg rounded-pill rounded-start px-lg-4"
                    type="submit"
                  >
                    Suscribirte
                  </button>
                </div>
                <p className="text-center light-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo
      title="Sobre Nosotros"
      description="Somos un equipo de profesionales apasionados por el diseño. Planeamos desde el dia 1 el diseño de tu nuevo setup."
    />
  </>
);
export default AboutPage;
