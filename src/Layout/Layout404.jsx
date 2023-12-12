import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import * as styles from "./LayoutDefault.module.scss";
import "../assets/scss/global.scss";

export default function Layout404({ children }) {
  const {theme} = useTheme();

  return (
    <div className={`${styles.app} ${theme === "dark" ? styles.dark : ""}`}>
      <main>{children}</main>
      <SocialLinks className={styles.aside} />
    </div>
  );
}
