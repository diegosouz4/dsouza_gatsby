import { Link } from "gatsby";
import React from "react";
import Logo from "../../components/Logo";
import NavBar from "../NavBar/NavBar";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <NavBar />
        <DarkModeBtn />
      </div>
    </header>
  );
}
