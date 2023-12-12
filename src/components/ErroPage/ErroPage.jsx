import React from "react";
import * as styles from "./ErroPage.module.scss";
import { LinkButtonFill, LinkButtonLine } from "../LinkButton/LinkButton";
import ErroIcon from "./ErroIcon";
import CircularPatterns from "../Effects/CircularPatterns/CircularPatterns";
import {motion} from "framer-motion";

export default function ErroPage() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{delay: 0.65}}><ErroIcon /></motion.div>
        <motion.h1 initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.5}}>Ops, parece que você se perdeu!</motion.h1>
        <motion.p initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.55}}>A página que você está procurando não existe. Talvez você queira voltar ao início.</motion.p>
        
        <motion.div className={styles.row} initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: 0}} transition={{delay: 0.65}}>
          <LinkButtonFill path="/">Voltar para a home</LinkButtonFill>
          <LinkButtonLine path="/projetos">Ver projetos</LinkButtonLine>
        </motion.div>
      </div>

      <CircularPatterns className={styles.leftPattern} />
      <CircularPatterns className={styles.rightPattern} />
    </section>
  )
}