import { graphql } from "gatsby";
import React from "react";
import LayoutDefault from "../../Layout/LayoutDefault";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import Hero from '../../components/Hero/Hero';
import AboutProject from "../../components/AboutProject/AboutProject";

export default function ProjetoPage({ data }) {
  const { projeto } = data;
  const thumb = projeto.projectThumb.node.gatsbyImage;
  let { listImagens } = projeto.projetcImagens;

  listImagens = listImagens.sort((a, b) =>
    a.title > b.title ? 1 : a.title < b.title ? -1 : 0
  );

  return (
    <LayoutDefault>
      <Hero title={`Projeto ${projeto.title}`} showBreadcrumb={true} tags={projeto.terms && projeto.terms.nodes}/>
      <AboutProject description={projeto.projectDescription} link={projeto.projectLink} linkText={projeto.projectLabel} thumb={thumb}  />

      {listImagens.length > 0 &&
        listImagens.map((img) => (
          <GatsbyImage
            key={img.title}
            image={getImage(img.gatsbyImage)}
            alt={img.altText ? img.altText : img.title}
          />
        ))}
    </LayoutDefault>
  );
}

export const Head = ({ data }) => <Seo title={data.projeto.title} />;

export const query = graphql`
  query ($slug: String) {
    projeto: wpMeuprojetov2(slug: {eq: $slug}) {
      title
      slug
      terms {
        nodes {
          name
        }
      }
      projectLabel
      projectDescription
      projectLink
      projetcImagens {
        listImagens: nodes {
          gatsbyImage(width: 1440, placeholder: BLURRED, formats: WEBP)
          title
          altText
        }
      }
      projectThumb {
        node {
          gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 450)
        }
      }
    }
  }
`;
