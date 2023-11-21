import { Link } from "gatsby";
import React from "react";
import * as styles from './ContactWrapper.module.scss';
import FlareEffect from "../../Effects/FlareEffect/FlareEffect";
import { LinkButtonLine } from "../../LinkButton/LinkButton";

export default function ContactWrapper({className}) {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.content}>
        <h2>Vamos <strong>Conversar?</strong></h2>
        <p>Vamos tirar a sua ideia do papel?</p>
        <LinkButtonLine className={styles.btn} path="/contato">Conversar</LinkButtonLine>
      </div>

      <div className={styles.background}>
        <FlareEffect className={styles.flareRight} />
        <FlareEffect className={styles.flareLeft} />
      </div>
    </div>

  );
}
