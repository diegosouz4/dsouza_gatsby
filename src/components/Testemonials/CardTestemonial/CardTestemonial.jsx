import React from "react";
import * as styles from "./CardTestemonial.module.scss";
import FlareEffect from "../../Effects/FlareEffect/FlareEffect";


export default function CardTestemonial({info}) {
  const {name, role, quote} = info;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{quote}</h3>
        <h4>{name}</h4>
        <p>{role}</p>
      </div>

      <div className={styles.background}>
        <FlareEffect className={`${styles.flareLeft} ${styles.flare}`} />
        <FlareEffect className={`${styles.flareRight} ${styles.flare}`} />
      </div>
    </div>
  );
}
