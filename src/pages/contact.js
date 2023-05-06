import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-light">
        <section className="container py-5">
          <h1 className="col-12 col-xl-8 h2 text-leftf tc-theme-pink pt-3">
            ¡Contactate con nosotros!
          </h1>
          <p className="col-12 col-xl-8 text-left text-muted pb-5 light-300">
            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate.
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.374026901383!2d-58.56505388423519!3d-34.670508468543154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62cc3ef7083%3A0x8867107f425fade5!2sNational%20University%20of%20La%20Matanza!5e0!3m2!1sen!2sar!4v1622079287518!5m2!1sen!2sar"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <div className="row py-5">
            <div className="col-lg-4">
              <div className="contact row mb-4">
                <div className="contact-icon col-lg-3 col-3">
                  <div className="py-3 mb-2 text-center border rounded text-secondary">
                    <i className="display-6 bx bx-news"></i>
                  </div>
                </div>
                <ul className="contact-info list-unstyled col-lg-9 col-9  light-300">
                  <li className="h5 mb-0">At.al Cliente</li>
                  <li className="text-muted">Sr. Juan García</li>
                  <li className="text-muted">15-1020-02340</li>
                </ul>
              </div>

              <div className="contact row mb-4">
                <div className="contact-icon col-lg-3 col-3">
                  <div className="border py-3 mb-2 text-center border rounded text-secondary">
                    <i className="bx bx-laptop display-6"></i>
                  </div>
                </div>
                <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                  <li className="h5 mb-0">Contacto Técnico</li>
                  <li className="text-muted">Ing. Juan Estrel</li>
                  <li className="text-muted">15-03020-40340</li>
                </ul>
              </div>

              <div className="contact row mb-4">
                <div className="contact-icon col-lg-3 col-3">
                  <div className="border py-3 mb-2 text-center border rounded text-secondary">
                    <i className="bx bx-money display-6"></i>
                  </div>
                </div>
                <ul className="contact-info list-unstyled col-lg-9 col-9 light-300">
                  <li className="h5 mb-0">Ventas</li>
                  <li className="text-muted">Sr. Ricardo Estevez</li>
                  <li className="text-muted">15-180-340123</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 ">
              <form
                className="contact-form row"
                method="post"
                action="#"
                role="form"
              >
                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg light-300"
                      id="floatingname"
                      name="inputname"
                      placeholder="Name"
                    />
                    <label for="floatingname light-300">Nombre</label>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg light-300"
                      id="floatingemail"
                      name="inputemail"
                      placeholder="Email"
                    />
                    <label for="floatingemail light-300">Email</label>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg light-300"
                      id="floatingphone"
                      name="inputphone"
                      placeholder="Phone"
                    />
                    <label for="floatingphone light-300">Teléfono</label>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg light-300"
                      id="floatingcompany"
                      name="inputcompany"
                      placeholder="Company Name"
                    />
                    <label for="floatingcompany light-300">Empresa</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg light-300"
                      id="floatingsubject"
                      name="inputsubject"
                      placeholder="Subject"
                    />
                    <label for="floatingsubject light-300">Asunto</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control light-300"
                      rows="8"
                      placeholder="Message"
                      id="floatingtextarea"
                    ></textarea>
                    <label for="floatingtextarea light-300">Mensaje</label>
                  </div>
                </div>

                <div className="col-md-12 col-12 m-auto text-end">
                  <button
                    type="submit"
                    className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <Seo
        title="Contacto"
        description="¿Listo para llevar tu experiencia de juego al siguiente nivel? Contáctanos y crearemos juntos el setup gamer personalizado perfecto para ti. ¡Nuestro equipo está ansioso por escuchar tus ideas y hacerlas realidad! #gaming #personalizado #contacto"
      ></Seo>
    </>
  );
};

export default Contact;
