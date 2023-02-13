import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Project from "../Project/Project";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("https://portfolio-server-chi.vercel.app/allProjects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const myStyle = {
    fontSize: "1.25rem",
    textAlign: "center",
    // paddingTop: "1%",
    color: "#555",
    // color: "#636e72",
  };
  return (
    <div className="project-section" data-aos="zoom-in">
      <div id="projects">
        <h2 className="fw-bold">Recent Projects</h2>
        <p style={myStyle} id="rcp-subtitle">
          Here you will find some of the projects that I created with each
          project containing its details
        </p>
      </div>

      <div className="projects my-5 text-center">
        {projects?.length &&
          projects
            ?.slice(0, 3)
            .map((project) => (
              <Project key={project.id} project={project}></Project>
            ))}
      </div>
      <Link className="" to="/all-projects">
        <Button
          variant="light border border-dark"
          className="view fw-bold"
          id="see-button"
        >
          See All Projects
        </Button>
      </Link>
    </div>
  );
};

export default Projects;
