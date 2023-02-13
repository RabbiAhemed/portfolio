import React from "react";
import { Container, ProgressBar } from "react-bootstrap";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const myStyle = {
    fontSize: "1.25rem",
    textAlign: "center",
    // paddingTop: "1%",
    // color: "#555",
    color: "#636e72",
  };
  return (
    <div className="skills-section" id="skills" data-aos="zoom-in">
      <div className=" pb-4">
        <h2 className="fw-bold">My Skills</h2>
        <p style={myStyle} id="ms-subtitle">
          Here you will find some information about my skills in terms of
          programming and technology
        </p>
      </div>
      <Container className="skills text-center mx-auto">
        <div className="skill my-3">
          <h6>React</h6>
          <ProgressBar className="w-50" animated now={70} label={`${70}%`} />
        </div>
        <div className="skill my-3">
          <h6>JavaScript</h6>
          <ProgressBar className="w-50" animated now={75} label={`${75}%`} />
        </div>
        <div className="skill my-3">
          <h6>Node JS</h6>
          <ProgressBar className="w-50" animated now={55} label={`${55}%`} />
        </div>
        <div className="skill my-3">
          <h6>MongoDB</h6>
          <ProgressBar className="w-50" animated now={55} label={`${55}%`} />
        </div>
        <div className="skill my-3">
          <h6>HTML</h6>
          <ProgressBar className="w-50" animated now={90} label={`${90}%`} />
        </div>
        <div className="skill my-3">
          <h6>CSS</h6>
          <ProgressBar className="w-50" animated now={80} label={`${80}%`} />
        </div>
        <div className="skill my-3">
          <h6>Bootstrap</h6>
          <ProgressBar className="w-50" animated now={90} label={`${90}%`} />
        </div>
        <div className="skill my-3">
          <h6>Express JS</h6>
          <ProgressBar className="w-50" animated now={55} label={`${55}%`} />
        </div>
        <div className="skill my-3">
          <h6>Firebase</h6>
          <ProgressBar className="w-50" animated now={60} label={`${60}%`} />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
