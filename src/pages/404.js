import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <div
      className=" text-light d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <h1>¡Ups, parece que te has perdido en el ciberespacio! 🙈</h1>

        <p>
          Lo siento, la página que buscas no existe o ha sido movida a otra
          dirección.
        </p>
        <p>
          Y recuerda, ¡siempre puedes volver a nuestra{" "}
          <Link className="link" to="/">
            PAGINA DE INICIO
          </Link>{" "}
          para descubrir más sobre nuestros productos y servicios! 😊
        </p>
        <br />
        <div className="text-center">
          <StaticImage
            src="../images/perrito-gamer.jpg"
            alt="perrito triste con cartel que dice 404"
          />
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Not found</title>;
export default NotFoundPage;
