import React from "react";
import { Link } from "gatsby";
import * as styles from "./Footer.module.scss";
import {motion} from "framer-motion";
import ContactWrapper from "./ContactWrapper/ContactWrapper";
import CircularPatterns from "../Effects/CircularPatterns/CircularPatterns";
import Logo from "../Logo";
import NavLinks from "./NavLinks/NavLinks";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer({isLinkTree}) {
  return (
    <footer className={styles.footer}>
      <motion.div className={`container ${styles.container}`} initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{amount: 0.8}}>
        {!isLinkTree && (
          <>          
            <ContactWrapper className={styles.contact} />
            <Link className={styles.logo} to="/" aria-label="Voltar para a home"><Logo /></Link>
            <NavLinks className={styles.nav} activeClass={styles.active} />
          </>
        )}
        
        <SocialLinks className={styles.socialLinks} />
        <p className={styles.copy}>Feito por mim © {new Date().getFullYear()}</p>
      </motion.div>

      {!isLinkTree && (
        <>
          <CircularPatterns className={styles.leftPattern} />
          <CircularPatterns className={styles.rightPattern} />
        </>
      )}
    </footer>
  );
}
