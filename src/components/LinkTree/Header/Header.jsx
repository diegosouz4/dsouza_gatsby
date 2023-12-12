import React from "react";
import DarkModeBtn from "../../DarkModeBtn/DarkModeBtn";
import { useTheme } from "../../../contexts/ThemeContext";
import { motion } from "framer-motion";
import * as styles from "./Header.module.scss";

export default function Header() {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.row}>
          <motion.p initial={{opacity: 0, x: "-150px"}} animate={{opacity: 1, x: 0}} transition={{delay: 0.3}}>
            Alterar para <strong>{theme === 'dark' ? "Claro" : "Escuro"}</strong>
          </motion.p>
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
}
