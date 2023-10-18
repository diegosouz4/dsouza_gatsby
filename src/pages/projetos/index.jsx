import React from "react";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";

export default function ProjectsPage() {
  return (
    <LayoutDefault>
      <h1>Meus projetos</h1>
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Meus projetos" />
