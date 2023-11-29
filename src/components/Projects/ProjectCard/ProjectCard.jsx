import React from "react";
import * as styles from "./ProjectCard.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { LinkButtonLine } from "../../LinkButton/LinkButton";

export default function ProjectCard({project}) {

  const {title, slug, terms, projectThumb, filterby} = project;
  const {gatsbyImage} = projectThumb.node;
  
  return (
    <div className={styles.card}>
      <GatsbyImage class={styles.thumb} image={gatsbyImage} alt={`thumb do projeto ${title}`} />        
      <div className={styles.content}>
        {title && <h3>{title}</h3>}
        {terms && (
          <div className={styles.tags}>
            {terms.nodes.map(({name}) => <span key={name}>{name}</span>)}
          </div>
        )}
        {slug && <LinkButtonLine className={styles.btn} path={`/projetos/${slug}`}>Ver projeto</LinkButtonLine>}
      </div>
    </div>
  );
}
