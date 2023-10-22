import LayoutDefault from "../Layout/LayoutDefault";
import React from "react";
import Seo from "../components/Seo";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import HeroHome from "../components/HeroHome/HeroHome";
import SlideSkills from "../components/SlideSkills/SlideSkills";
import About from "../components/About/About";

export default function HomePage() {
  const { projetos } = useStaticQuery(queryProjetos);

  console.log(projetos.nodes);

  return (
    <LayoutDefault>
      <HeroHome />
      <SlideSkills />
      <About />

      {/* <h2>Meus projetos</h2>
      {projetos.nodes.map((projeto) => (
        <div key={projeto.slug}>
          <GatsbyImage
            image={getImage(projeto.projectThumb.node.gatsbyImage)}
            alt={projeto.title}
          />
          <h3>{projeto.title}</h3>
          <div className="termos">
            {projeto.terms.nodes.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </div>
          <Link to={`/projetos/${projeto.slug}`}>Ver projeto</Link>
        </div>
      ))} */}
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
