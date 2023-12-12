import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Footer from "../components/Footer/Footer";
import ModalForm from "../components/ModalForm/ModalForm";
import CircularPatterns from "../components/Effects/CircularPatterns/CircularPatterns";
import Header from "../components/LinkTree/Header/Header";
import "../assets/scss/global.scss";
import * as styles from "./LayoutDefault.module.scss";
import * as stylesLinks from "./LayoutLinkTree.module.scss";

export default function LayoutLinkTree({ children }) {
  const {theme} = useTheme();

  return (
    <div className={`${styles.app} ${stylesLinks.links} ${theme === "dark" ? styles.dark : ""}`}>
      <Header />
      <main className={stylesLinks.main}>{children}</main>
      <Footer isLinkTree={true} />
      <ModalForm />

      <CircularPatterns className={stylesLinks.leftPattern} />
      <CircularPatterns className={stylesLinks.rightPattern} />
    </div>
  );
}
