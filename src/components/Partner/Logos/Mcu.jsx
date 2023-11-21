import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Mcu({ theme }) {
  if (theme === "dark") {
    return (
      <StaticImage
        placeholder="none"
        src="../../../assets/img/partners/parceiro-mcu-white.png"
        alt="Fundação Planetário do Rio de Janeiro"
      />
    );
  }

  return (
    <StaticImage
      placeholder="none"
      src="../../../assets/img/partners/parceiro-mcu.png"
      alt="Fundação Planetário do Rio de Janeiro"
    />
  );
}
