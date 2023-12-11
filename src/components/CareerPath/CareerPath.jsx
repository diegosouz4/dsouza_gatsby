import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {motion} from "framer-motion";
import * as styles from './CareerPath.module.scss';

export default function CareerPath() {
  const { currently } = useStaticQuery(query).dataJson;

  return (
    <section className={styles.section} aria-label="">
      <div className={`container ${styles.container}`}>
        <motion.h2 initial={{opacity: 0, y: "100px"}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{ease: "linear", delay: .3}}><strong>Atualmente</strong></motion.h2>
        {currently && (
          <ul className={styles.currently}>
            {currently.map((item, index) => {
              return <motion.li className={styles.item} key={index} initial={{opacity: 0, x: index % 2 ? "300px" : "-300px"}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: .65}}>
                {item.role && <h3 className={styles.role}>{item.role}</h3>}
                {item.company && <h4 className={styles.company}>{item.company} {item.range && <span className={styles.range}>{item.range}</span>}</h4>}
                {item.description && <p className={styles.description}>{item.description}</p>}
              </motion.li>;
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

const query = graphql`
  query {
    dataJson {
      currently {
        company
        description
        range
        role
      }
    }
  }
`;
