import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "../../components/Project/Project";
import "./AllProjects.css";
import AOS from "aos";
import "aos/dist/aos.css";
const AllProjects = () => {
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
    <div className="all-project-section" data-aos="zoom-in">
      <h2 className="fw-bold" id="projects">
        Projects
      </h2>
      <p style={myStyle} id="rcp-subtitle">
        Here you will find the best projects that I created with each project
        containing its details
      </p>

      <div className="all-projects mx-5 my-5 text-center">
        {projects?.length &&
          projects?.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
      </div>
    </div>
  );
};

export default AllProjects;
