import React from 'react';
import * as styles from './FlareEffect.module.scss';

export default function FlareEffect({className}) {
  return <span aria-hidden className={`${styles.flare} ${className}`}></span>
}