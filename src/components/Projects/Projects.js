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
  return (
    <div className="project-section" data-aos="zoom-in">
      <h2 className="fw-bold" id="projects">
        Recent Projects
      </h2>

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
