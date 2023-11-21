import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function NavLinks({className, activeClass}) {
  
  const {navLinks} = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navLinks
        }
      }
    }
  `).site.siteMetadata;
  
  return (
    <nav className={className}>
      {navLinks.map((link, index) => (
        <Link key={index} activeClassName={`${activeClass}`} to={`/${link.toLowerCase()}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}