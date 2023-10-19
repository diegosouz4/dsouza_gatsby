import { Link } from "gatsby";
import React from "react";
import * as styles from './NavBar.module.scss';

const links = ["Sobre", "Projetos", "Estudos", "Contato"];

export default function NavBar({isOpen}) {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      {links.map((link, index) => (
        <Link key={index} activeClassName={`${styles.active}`} to={`/${link.toLowerCase()}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
