import { Link } from "gatsby";
import React from "react";
import * as styles from './LinkButton.module.scss';

export function LinkButtonFill({ path, className, children }) {
  return (
    <Link to={path} className={`${styles.btn} ${styles.fill} ${className && className}`}>
      {children}
    </Link>
  );
}

export function LinkButtonLine({ path, className, children }) {
  return (
    <Link to={path} className={`${styles.btn} ${styles.line} ${className && className}`}>
      {children}
    </Link>
  );
}
