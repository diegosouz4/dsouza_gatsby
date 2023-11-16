import LayoutDefault from "../Layout/LayoutDefault";
import React from "react";
import Seo from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import HeroHome from "../components/HeroHome/HeroHome";
import SlideSkills from "../components/SlideSkills/SlideSkills";
import About from "../components/About/About";
import Cases from "../components/Cases/Cases";

export default function HomePage() {
  const { projetos } = useStaticQuery(queryProjetos);
  
  return (
    <LayoutDefault>
      <HeroHome />
      <SlideSkills />
      <About />
      { projetos && <Cases projetos={projetos} />}
    </LayoutDefault>
  );
}

export const Head = () => <Seo />;

const queryProjetos = graphql`
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
      }
    }
  }
`;
