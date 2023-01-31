import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Project from "../Project/Project";
import "./Projects.css";
const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch("https://portfolio-server-chi.vercel.app/allProjects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="project-section">
      <h2 className="fw-bold" id="projects">
        Recent Projects
      </h2>

      <div className="projects mx-5 my-5 text-center">
        {projects?.length &&
          projects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
      </div>
      {/* <Link className="" to="">
        <Button variant="light border border-dark" className="view fw-bold">
          See All Projects
        </Button>
      </Link> */}
    </div>
  );
};

export default Projects;
