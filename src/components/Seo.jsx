import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";

export default function Seo({ title, description, pathname, children }) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    icon,
    image,
    author,
  } = useSiteMetadata();

  const seoData = {
    title: `${title} | Diego Souza desenvolvedor front-end` || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ""}`,
    image: image,
    icon: icon,
    author: author,
  };

  return (
    <>
      <html lang="pt-br" />
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="image" content={seoData.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:url" content={seoData.url} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.image} />
      <meta name="twitter:creator" content={seoData.twitterUsername} />
      <link rel="icon" href={seoData.icon} type="image/svg+xml"></link>
      <meta name="author" content={seoData.author} />
      <meta http-equiv="content-language" content="pt-br" />
      {/* <meta name="color-scheme" content="dark light" /> */}
      {children}
    </>
  );
}
