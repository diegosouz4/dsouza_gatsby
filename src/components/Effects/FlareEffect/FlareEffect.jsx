import React from 'react';
import * as styles from './FlareEffect.module.scss';

export default function FlareEffect({className}) {
  return <span className={`${styles.flare} ${className}`}></span>
}