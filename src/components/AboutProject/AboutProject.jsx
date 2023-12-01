import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./AboutProject.module.scss";
import CircularPatterns from "../Effects/CircularPatterns/CircularPatterns";
import { ExternalLinkButtonLine } from "../LinkButton/LinkButton";

export default function AboutProject({description, link, linkText, thumb}) {
  
  return (
    <section className={styles.section} aria-label="Sobre o projeto">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2>Sobre o <strong>Projeto</strong></h2>
          {description && <p dangerouslySetInnerHTML={{__html: description.replaceAll(/<\/?p>/g, '')}}></p>}
          {link && <ExternalLinkButtonLine className={styles.btn} href={link} target="_blank">{linkText ? linkText : 'Ver projeto'}</ExternalLinkButtonLine>}
        </div>

        <GatsbyImage className={styles.thumb} image={thumb} alt="thumb do projeto" />
      </div>

      <CircularPatterns className={styles.leftPattern} />
      <CircularPatterns className={styles.rightPattern} />
    </section>
  );
}
