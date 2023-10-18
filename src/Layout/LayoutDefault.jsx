import React from "react";
import Header from "../components/Header/Header";
import * as styles from "./LayoutDefault.module.scss";
import "../assets/scss/global.scss";

export default function LayoutDefault({ children }) {
  return (
    <div className={styles.app}>
      <Header />
      <main>{children}</main>
      <footer>meu footer</footer>
    </div>
  );
}
