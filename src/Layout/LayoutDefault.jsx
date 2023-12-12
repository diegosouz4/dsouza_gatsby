import React from "react";
import Header from "../components/Header/Header";
import * as styles from "./LayoutDefault.module.scss";
import "../assets/scss/global.scss";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "../components/Footer/Footer";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import ModalForm from "../components/ModalForm/ModalForm";

export default function LayoutDefault({ children }) {
  const {theme} = useTheme();

  return (
    <div className={`${styles.app} ${theme === "dark" ? styles.dark : ""}`}>
      <Header />
      <main>{children}</main>
      <Footer />
      <SocialLinks className={styles.aside} isAside={true} />
      <ModalForm />
    </div>
  );
}
