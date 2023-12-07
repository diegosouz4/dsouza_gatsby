import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from './NavBar.module.scss';

export default function NavBar({isOpen}) {
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
    <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      {navLinks.map((link, index) => (
        <Link key={index} activeClassName={`${styles.active}`} className="fadeIn" to={`/${link.toLowerCase()}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
