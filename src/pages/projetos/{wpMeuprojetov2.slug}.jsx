import { graphql } from "gatsby";
import React from "react";
import LayoutDefault from "../../Layout/LayoutDefault";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";

export default function ProjetoPage({ data }) {
  const { projeto } = data;
  let { listImagens } = projeto.projetcImagens;

  listImagens = listImagens.sort((a, b) =>
    a.title > b.title ? 1 : a.title < b.title ? -1 : 0
  );

  return (
    <LayoutDefault>
      {projeto.title && <h1>{projeto.title}</h1>}

      {projeto.projectDescription && (
        <div
          dangerouslySetInnerHTML={{ __html: projeto.projectDescription }}
        ></div>
      )}

      {projeto.projectLink && (
        <a href={projeto.projectLink} target="_blank" rel="noopen noreferrer">
          {projeto.projectLabel ? projeto.projectLabel : "Ver projeto"}
        </a>
      )}

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
    projeto: wpMeuprojetov2(slug: { eq: $slug }) {
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
    }
  }
`;
