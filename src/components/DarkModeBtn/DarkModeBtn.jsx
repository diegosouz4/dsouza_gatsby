import React from "react";
import DarkmodeIcon from "./DarkmodeIcon";
import { useTheme } from "../../contexts/ThemeContext";
import * as styles from "./DarkModeBtn.module.scss";

export default function DarkModeBtn() {
  const { theme, toggeTheme } = useTheme();
  const [label, setLabel] = React.useState("");

  React.useEffect(() => {
    setLabel(
      theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
    );
  }, [theme, label]);

  return (
    <button
      className={`${styles.btn} ${theme === "dark" ? styles.dark : ""} fadeInRight`}
      onClick={toggeTheme}
      title={label}
      aria-label={label}
    >
      <DarkmodeIcon clasName={styles.icon} />
    </button>
  );
}
