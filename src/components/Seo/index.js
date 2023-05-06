import React from "react";
import useSiteMetadata from "../../hooks/use-site-metadata";

const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" href="../../../favicon.ico" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../../favicon.ico"
      />
      {children}
    </>
  );
};

export default Seo;
