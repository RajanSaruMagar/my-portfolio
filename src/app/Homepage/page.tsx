import React from "react";
import HomeSection from "../components/homeSection";
import PortfolioSection from "../components/portfolioSection";
import AboutSection from "../components/about";
import GetInTouch from "../components/getInTouch";
import ServiceSection from "../components/service";
import NavBarSection from "../components/navBar";
import SkillsCarousel from "../components/skills";

const Homepage = () => {
  return (
    <>
      <div>
        <NavBarSection />
        <HomeSection />
        <AboutSection  />
        <SkillsCarousel />
        <PortfolioSection />
        <ServiceSection />
        <GetInTouch />
      </div>
    </>
  );
};

export default Homepage;
