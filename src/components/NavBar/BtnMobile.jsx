import React from "react";
import * as styles from "./BtnMobile.module.scss";

let time;

export default function BtnMobile({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    clearTimeout(time);

    time = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }, [isOpen]);

  return (
    <button className={styles.btn} onClick={handleClick} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
      <div className={`${styles.icon} ${isOpen && styles.open}`}></div>
    </button>
  );
}
