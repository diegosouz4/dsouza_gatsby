import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import {FaCode} from '@react-icons/all-files/fa/FaCode';
import { FaDrawPolygon } from "@react-icons/all-files/fa/FaDrawPolygon";
import * as style from "./About.module.scss";

export default function About() {
  const { about, skills } = useStaticQuery(graphql`
    query {
      dataJson {
        about
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
    <section className={style.about} aria-label="sobre">
      <div className={`${style.container} container`}>
        <div className={style.thumb}>
          <StaticImage
            src="../../assets/img/dsouza-about-thumb.png"
            alt="Diego Souza thumb"
            aria-hidden
            placeholder="none"
            className={style.img}
          />
        </div>

        <div className={style.content}>
          <h2>Sobre <strong>mim</strong></h2>
          {about && <p dangerouslySetInnerHTML={{ __html: about }}></p>}

          <div className={style.skills}>
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
    </section>
  );
}
