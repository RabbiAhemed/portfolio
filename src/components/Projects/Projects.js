import React from "react";
import { useLoaderData } from "react-router-dom";
import Project from "../Project/Project";
import "./Projects.css";
const Projects = () => {
  const projects = useLoaderData();

  return (
    <div className="my-5 py-5">
      <h1 className="my-5 fw-bold">Projects</h1>
      <div className="projects ms-5 my-5" style={{ textAlign: "center" }}>
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
