import React from "react";
import * as styles from './Projects.module.scss';
import ProjectCard from "./ProjectCard/ProjectCard";
import { graphql, useStaticQuery } from "gatsby";
import FilterBy from "./FilterBy/FilterBy";
import {motion} from "framer-motion";

export default function Projects() {
  const [filterBy, setFilterBy] = React.useState('all');
  const [filteredProjects, setFilteredProjects] = React.useState(null);

  const projects = useStaticQuery(query).projetos.nodes;  

  function updateFilter(newValue = 'all'){
    setFilterBy(newValue);
  }

  React.useLayoutEffect(() => {
    if(filterBy === 'all') {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(filterProjects());
  }, [filterBy]);

  function filterProjects() {
    let newArr = projects.filter((project) => {
      const regex = new RegExp(filterBy);
      if(regex.test(project.filterby.toLowerCase())) return project; 
    });

    return newArr;
  }
  
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
        <FilterBy filterBy={filterBy} updateFilter={updateFilter} />
        <motion.ul className={styles.projects}>
          {filteredProjects && filteredProjects.map((project, index) => <motion.li initial={{ y: `${50 * index}px`, opacity: "0" }} animate={{ y: "0", opacity: "1" }} className={styles.item} key={project.title}><ProjectCard project={project} /></motion.li>)}
        </motion.ul>
      </div>
    </section>
  );
}

const query = graphql`
  query {
    projetos: allWpMeuprojetov2 {
      nodes {
        title
        terms {
          nodes {
            name
          }
        }
        projectThumb {
          node {
            gatsbyImage(width: 400, placeholder: BLURRED, formats: WEBP)
          }
        }
        slug
        filterby
      }
    }
  }
`;