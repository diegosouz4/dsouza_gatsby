import React from "react";
import * as styles from './Button.module.scss';

export function ButtonFill({ handleClick, className, children }) {
  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles.fill} ${className && className}`}>
      {children}
    </button>
  );
}

export function ButtonLine({ handleClick, className, children }) {
  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles.line} ${className && className}`}>
      {children}
    </button>
  );
}
