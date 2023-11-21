import React from "react";
import Header from "../components/Header/Header";
import * as styles from "./LayoutDefault.module.scss";
import "../assets/scss/global.scss";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "../components/Footer/Footer";

export default function LayoutDefault({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`${styles.app} ${theme === "dark" ? styles.dark : ""}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
