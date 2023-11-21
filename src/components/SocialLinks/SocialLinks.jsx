import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function SocialLinks({className}) {
  const {social} = useStaticQuery(query).dataJson;

  return (
    <ul className={className}>
      {social.map(({name, url, icon, show}) => show ? <li key={name}><a href={url} target="_blank" rel="noreferrer" title={name} dangerouslySetInnerHTML={{__html: icon}}></a></li> : '')}
    </ul>
  );
}

const query = graphql`
  query {
    dataJson {
      social {
        name
        url
        icon
        show
      }
    }
  }
`;
