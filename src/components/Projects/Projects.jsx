import React from "react";
import * as styles from './Projects.module.scss';
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects({projects}) {
  
  
  if(!projects || projects.length < 1) {
    return (
      <section className={styles.section}>
        <div className={`container`}>
         <p className={styles.error}>Não foi possivel carregar os projetos! Tente novamente mais tarde, obrigado	&#128517;</p>
        </div>
      </section>
    )
  }
  
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <ul className={styles.projects}>
          {projects && projects.map((project) => <li className={styles.item} key={project.title}><ProjectCard project={project} /></li>)}
        </ul>
      </div>
    </section>
  );
}
