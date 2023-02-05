import React from "react";
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Scrap from "../Scrap/Scrap";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Scrap></Scrap>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
