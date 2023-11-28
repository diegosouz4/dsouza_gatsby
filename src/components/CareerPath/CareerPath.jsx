import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from './CareerPath.module.scss';

export default function CareerPath() {
  const { currently } = useStaticQuery(query).dataJson;

  return (
    <section className={styles.section} aria-label="">
      <div className={`container ${styles.container}`}>
        <h2><strong>Atualmente</strong></h2>
        {currently && (
          <ul className={styles.currently}>
            {currently.map((item, index) => {
              return <li className={styles.item} key={index}>
                {item.role && <h3 className={styles.role}>{item.role}</h3>}
                {item.company && <h4 className={styles.company}>{item.company} {item.range && <span className={styles.range}>{item.range}</span>}</h4>}
                {item.description && <p className={styles.description}>{item.description}</p>}
              </li>;
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
