import React from "react";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";

export default function AboutPage() {
  return (
    <LayoutDefault>
      <h1>About page</h1>
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Sobre mim" />;
