import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import {FaCode} from '@react-icons/all-files/fa/FaCode';
import { FaDrawPolygon } from "@react-icons/all-files/fa/FaDrawPolygon";
import * as styles from "./About.module.scss";
import CircularPatterns from '../Effects/CircularPatterns/CircularPatterns';

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

  return (
    <section className={styles.about} aria-label="sobre">
      <div className={`${styles.container} container`}>
        <div className={styles.thumb}>
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

        <div className={styles.content}>
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
