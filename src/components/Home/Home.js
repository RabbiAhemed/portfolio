import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <div>
      <Header></Header>

      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
