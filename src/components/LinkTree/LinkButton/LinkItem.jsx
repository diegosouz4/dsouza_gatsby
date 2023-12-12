import React from "react";
import { Link } from "gatsby";
import { useTheme } from "../../../contexts/ThemeContext";
import * as styles from "./LinkItem.module.scss";

export default function LinkItem({ data }) {
  const { handleModal } = useTheme();
  const {label, url, isExternal} = data;

  return isExternal ? (
    <a className={styles.btn} href={url} target="_blank" rel="noreferral">{label}</a>
  ) : url === "/contato" ? (
    <button className={styles.btn} onClick={handleModal} aria-label="Mostrar form">{label}</button>
  ) : (
    <Link className={styles.btn} to={url}>{label}</Link>
  );
}
