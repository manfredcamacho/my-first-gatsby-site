import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="The Great Gatsby movie poster"
        src="https://noticiasdatv.uol.com.br/media/uploads/artigos/great-gatsby-leonardo-de-caprio-warner-bros.jpg"
      />
      <StaticImage alt="The Great Gatsby meme" src="../images/gatsby.png" />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
