import React from "react";
import * as styles from './Description.module.scss';
import {motion} from "framer-motion";

export default function Description({description, className}) {  
  if(!description) return;
  
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.p className={`${className} ${styles.description}`} initial={{opacity: 0, y: "100px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>{description}</motion.p>
      </div>
    </section>
  )
}