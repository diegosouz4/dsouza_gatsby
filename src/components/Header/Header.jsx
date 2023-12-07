import { Link } from "gatsby";
import React from "react";
import Logo from "../../components/Logo";
import NavBar from "../NavBar/NavBar";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import * as styles from "./Header.module.scss";
import BtnMobile from "../NavBar/BtnMobile";
import { ButtonFill } from "../Button/Button";
import {useTheme} from "../../contexts/ThemeContext";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const {handleModal} = useTheme();


  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={`${styles.logo} fadeInLeft`} aria-label="Voltar para a home">
          <Logo />
        </Link>
        <NavBar isOpen={isOpen} />
        <div className={styles.control}>
          <ButtonFill handleClick={handleModal} className={styles.btn}>Contato</ButtonFill>
          <BtnMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
}
