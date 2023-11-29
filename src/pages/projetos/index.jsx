import React from "react";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";
import Hero from "../../components/Hero/Hero";
import SlideSkills from "../../components/SlideSkills/SlideSkills";
import Description from "../../components/Description/Description";
import { graphql, useStaticQuery } from "gatsby";
import Projects from "../../components/Projects/Projects";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = React.useState([]);
  const [filterBy, setFilterBy] = React.useState('all');

  const projects = useStaticQuery(query).projetos.nodes;

  return (
    <LayoutDefault>
      <Hero title="Meus Projetos" showBreadcrumb={true} />
      <SlideSkills />
      <Description description="Nessa página, eu listei alguns dos projetos que desenvolvi durante esse período em que trabalhei como designer gráfico e desenvolvedor front-end."/>
      <Projects projects={filterBy === 'all' ? projects : filteredProjects} />
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Meus projetos" />

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
