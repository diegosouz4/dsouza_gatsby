import React from "react";
import Seo from "../../components/Seo";
import LayoutDefault from "../../Layout/LayoutDefault";
import About from "../../components/About/About";
import SlideSkills from "../../components/SlideSkills/SlideSkills";
import Hero from "../../components/Hero/Hero";
import CareerPath from "../../components/CareerPath/CareerPath";
import Cases from "../../components/Cases/Cases";

export default function AboutPage() {
  return (
    <LayoutDefault>
      <Hero title="Sobre mim" showBreadcrumb={true} />
      <SlideSkills />
      <About />
      <CareerPath />
      
    </LayoutDefault>
  );
}

export const Head = () => <Seo title="Sobre mim" />;
