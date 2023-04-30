import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About Me" />
    <meta name="description" content="Your description" />
  </>
);
export default AboutPage;
