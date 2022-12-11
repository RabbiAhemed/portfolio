import React from "react";
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
