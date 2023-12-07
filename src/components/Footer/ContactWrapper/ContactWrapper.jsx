import React from "react";
import * as styles from './ContactWrapper.module.scss';
import FlareEffect from "../../Effects/FlareEffect/FlareEffect";
import { ButtonLine } from "../../Button/Button";
import { useTheme } from "../../../contexts/ThemeContext";

export default function ContactWrapper({className}) {
  const {handleModal} = useTheme();

  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.content}>
        <h2>Vamos <strong>Conversar?</strong></h2>
        <p>Pronto para tirar a sua ideia do papel?</p>
        <ButtonLine handleClick={handleModal} className={styles.btn}>Conversar</ButtonLine>
      </div>

      <div className={styles.background}>
        <FlareEffect className={styles.flareRight} />
        <FlareEffect className={styles.flareLeft} />
      </div>
    </div>

  );
}
