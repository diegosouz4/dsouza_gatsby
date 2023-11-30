import React from "react";
import * as styles from './Description.module.scss';

export default function Description({description, className}) {
  
  if(!description) return;
  
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <p className={`${className} ${styles.description}`}>{description}</p>
      </div>
    </section>
  )
}