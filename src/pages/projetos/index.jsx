import React from "react";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";
import Hero from "../../components/Hero/Hero";
import SlideSkills from "../../components/SlideSkills/SlideSkills";
import Description from "../../components/Description/Description";
import Projects from "../../components/Projects/Projects";

const descriptionText = "Nessa página, eu listei alguns dos projetos que desenvolvi durante esse período em que trabalhei como designer gráfico e desenvolvedor front-end.";

export default function ProjectsPage() {

  return (
    <LayoutDefault>
      <Hero title="Meus Projetos" showBreadcrumb={true} />
      <SlideSkills />
      <Description description={descriptionText}></Description>
      <Projects />
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Meus projetos" />
