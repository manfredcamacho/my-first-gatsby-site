/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    defaultTitle: "My First Gatsby Site",
    defaultDescription: "This is my first Gatsby site!",
    author: "Manfred Camacho",
    siteUrl: "https://game-station-2023.netlify.app",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Exo 2:300,400,600"],
        display: "swap",
      },
    },
  ],
  trailingSlash: "never",
};
