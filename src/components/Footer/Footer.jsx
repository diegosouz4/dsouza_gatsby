import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import ContactWrapper from "./ContactWrapper/ContactWrapper";
import Logo from "../Logo";
import { Link } from "gatsby";
import CircularPatterns from "../Effects/CircularPatterns/CircularPatterns";
import SocialLinks from "../SocialLinks/SocialLinks";
import * as styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ContactWrapper className={styles.contact} />
        <Link className={styles.logo} to="/" aria-label="Voltar para a home"><Logo /></Link>
        <NavLinks className={styles.nav} activeClass={styles.active} />
        <SocialLinks className={styles.socialLinks} />
        <p className={styles.copy}>Feito por mim © {new Date().getFullYear()}</p>
      </div>

      <CircularPatterns className={styles.leftPattern} />
      <CircularPatterns className={styles.rightPattern} />
    </footer>
  );
}
