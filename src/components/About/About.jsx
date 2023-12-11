import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FaCode} from '@react-icons/all-files/fa/FaCode';
import { FaDrawPolygon } from "@react-icons/all-files/fa/FaDrawPolygon";
import CircularPatterns from '../Effects/CircularPatterns/CircularPatterns';
import * as styles from "./About.module.scss";

export default function About({useSummary}) {
  const { about, summary, skills } = useStaticQuery(graphql`
    query {
      dataJson {
        about
        summary
        skills {
          designer {
            title
            tags
          }
          developer {
            title
            tags
          }
        }
      }
    }
  `).dataJson;

  const { designer, developer } = skills;

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("[data-about='thumb']", {
      opacity: 0,
      x: -300
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "[data-about='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px"
      }
    });

    gsap.fromTo("[data-about='content']", {
      opacity: 0,
      x: 300
    }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "[data-about='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px"
      }
    });

    gsap.fromTo("[data-about='section'] svg", {
      opacity: 0,
      scale: 0
    }, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: "[data-about='section']",
        scrub: true,
        start: "top 550px",
        end: "bottom 750px",
      }
    });
    
    return () => {
      gsap.killTweensOf("[data-about='thumb']");
      gsap.killTweensOf("[data-about='content']");
      gsap.killTweensOf("[data-about='section'] svg");
    }
  }, []);

  return (
    <section className={styles.about} aria-label="sobre" data-about="section">
      <div className={`${styles.container} container`}>
        <div className={styles.thumb} data-about="thumb">
          <StaticImage
            src="../../assets/img/dsouza-about-thumb.png"
            alt="Diego Souza thumb"
            aria-hidden
            placeholder="none"
            width={350}
            height={350}
            className={styles.img}
          />

          <a className={styles.btn} href="/cv-diego-souza.pdf">Download CV</a>
        </div>

        <div className={styles.content} data-about="content">
          <h2>Sobre <strong>mim</strong></h2>         

          {useSummary ? <p dangerouslySetInnerHTML={{ __html: summary }}></p> : about && <p dangerouslySetInnerHTML={{ __html: about }}></p>}

          <div className={styles.skills}>
            <div className="dev">
              <h3><FaCode />{developer.title}</h3>
              <ul>{developer.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
            </div>

            <div className="dev">
              <h3><FaDrawPolygon/>{designer.title}</h3>
              <ul>{designer.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>
            </div>
          </div>
        </div>
      </div>

      <CircularPatterns className={styles.leftPattern} />
      <CircularPatterns className={styles.rightPattern} />
    </section>
  );
}
