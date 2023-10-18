import { Link } from "gatsby";
import React from "react";

const links = ["Sobre", "Projetos", "Estudos", "Contato"];

export default function NavBar() {
  return (
    <nav>
      {links.map((link, index) => (
        <Link key={index} to={`/${link.toLowerCase()}`}>
          {link}
        </Link>
      ))}
    </nav>
  );
}
