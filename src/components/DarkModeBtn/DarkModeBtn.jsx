import React from "react";
import DarkmodeIcon from "./DarkmodeIcon";
import { useTheme } from "../../contexts/ThemeContext";
import * as styles from "./DarkModeBtn.module.scss";

export default function DarkModeBtn() {
  const { theme, toggeTheme } = useTheme();

  return (
    <button
      className={`${styles.btn} ${theme === "dark" ? styles.dark : ""}`}
      onClick={toggeTheme}
      aria-label={
        theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
      }
    >
      <DarkmodeIcon clasName={styles.icon} />
    </button>
  );
}
