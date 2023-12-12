import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {motion} from "framer-motion";

export default function SocialLinks({className, isAside}) {
  const {social} = useStaticQuery(query).dataJson;

  return (
    <>
      {isAside ? (
        <motion.ul className={className} initial={{opacity: 0, transform: "translate3d(150px, -50%, 0)"}} animate={{opacity: 1, transform: "translate3d(0, -50%, 0)"}} transition={{ease: "linear", delay: 0.5}}>{social.map(({name, url, icon, show}) => show ? <li key={name}><a href={url} target="_blank" rel="noreferrer" title={name} aria-label={name} dangerouslySetInnerHTML={{__html: icon}}></a></li> : '')}</motion.ul>
      ) : (
        <ul className={className}>{social.map(({name, url, icon, show}) => show ? <li key={name}><a href={url} target="_blank" rel="noreferrer" title={name} aria-label={name} dangerouslySetInnerHTML={{__html: icon}}></a></li> : '')}</ul>
      )}
    </>
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
