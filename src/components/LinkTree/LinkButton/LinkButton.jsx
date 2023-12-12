import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import * as styles from "./LinkButton.module.scss";
import LinkItem from "./LinkItem";

export default function LinkButton() {
  const { linktree } = useStaticQuery(query).dataJson;

  return (
    <ul className={styles.links}>
      {linktree && linktree.map((data, index) => (
        <motion.li key={index} initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5 + (index + 1) * 0.1}}><LinkItem data={data} /></motion.li>
      ))}
    </ul>
  );
}

const query = graphql`
  query {
    dataJson {
      linktree {
        url
        label
        isExternal
      }
    }
  }
`;
