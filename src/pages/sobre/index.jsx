import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";
import About from "../../components/About/About";
import SlideSkills from "../../components/SlideSkills/SlideSkills";
import Hero from "../../components/Hero/Hero";
import CareerPath from "../../components/CareerPath/CareerPath";
import Cases from "../../components/Cases/Cases";

export default function AboutPage() {

  const { projetos } = useStaticQuery(queryProjetos);

  return (
    <LayoutDefault>
      <Hero title="Sobre mim" showBreadcrumb={true} />
      <SlideSkills />
      <About useSummary={true} />
      <CareerPath />
      { projetos && <Cases projetos={projetos} />}
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Sobre mim" />;

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
