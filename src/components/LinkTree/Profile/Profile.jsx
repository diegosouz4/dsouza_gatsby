import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import * as styles from "./Profile.module.scss";
import LinkButton from "../LinkButton/LinkButton";

export default function Profile() {
  const {name, intro} = useStaticQuery(query).dataJson;

  return (
    <section className={styles.section} aria-label="Profile">
      <div className={`container ${styles.container}`}>
        <motion.div className={styles.thumb} initial={{opacity: 0, y: "80px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>
          <StaticImage
            src="../../../assets/img/dsouza-links-thumb.jpg"
            alt="Diego Souza thumb"
            aria-hidden
            placeholder="none"
            width={160}
            height={160}
          />
        </motion.div>

        { name && <motion.h1 initial={{opacity: 0, y: "80px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.65}}>{name}</motion.h1>}
        { intro && <motion.p dangerouslySetInnerHTML={{__html:intro}} initial={{opacity: 0, y: "80px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.75}}/>}

        <LinkButton />
      </div>
    </section>
  );
}

const query = graphql`
  query {
    dataJson {
      name
      intro
    }
  }
`;
