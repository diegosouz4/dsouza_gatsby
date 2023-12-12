import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "./AboutProject.module.scss";
import CircularPatterns from "../Effects/CircularPatterns/CircularPatterns";
import { ExternalLinkButtonLine } from "../LinkButton/LinkButton";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function AboutProject({description, link, linkText, thumb}) {

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("[data-aboutproject='section'] h2", {
      opacity: 0,
      x: -150
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "[data-aboutproject='section']",
        scrub: false,
        start: "top 350px",
        end: "bottom 550px"
      }
    });

    gsap.fromTo("[data-aboutproject='section'] p", {
      opacity: 0,
      y: 150
    }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "[data-aboutproject='section']",
        scrub: false,
        start: "top 350px",
        end: "bottom 450px"
      }
    });

    gsap.fromTo("[data-aboutproject='section'] a", {
      opacity: 0,
      x: 150
    }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "[data-aboutproject='section']",
        scrub: false,
        start: "top 350px",
        end: "bottom 450px"
      }
    });

    gsap.fromTo("[data-aboutproject='thumb']", {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: "[data-aboutproject='section']",
        scrub: false,
        start: "top 350px",
        end: "bottom 450px"
      }
    });
    
    return () => {
      gsap.killTweensOf("[data-aboutproject='section'] h2");
      gsap.killTweensOf("[data-aboutproject='section'] p");
      gsap.killTweensOf("[data-aboutproject='section'] a");
      gsap.killTweensOf("[data-aboutproject='thumb']");
    }
  }, []);
  
  return (
    <section className={styles.section} aria-label="Sobre o projeto" data-aboutproject="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2>Sobre o <strong>Projeto</strong></h2>
          {description && <p dangerouslySetInnerHTML={{__html: description.replaceAll(/<\/?p>/g, '')}}></p>}
          {link && <ExternalLinkButtonLine className={styles.btn} href={link} target="_blank">{linkText ? linkText : 'Ver projeto'}</ExternalLinkButtonLine>}
        </div>

        <GatsbyImage className={styles.thumb} image={thumb} alt="thumb do projeto" data-aboutproject="thumb"/>
      </div>

      <CircularPatterns className={styles.leftPattern} dataClass="aboutLeft" />
      <CircularPatterns className={styles.rightPattern} dataClass="aboutRight" />
    </section>
  );
}
