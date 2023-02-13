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
  return (
    <div className="all-project-section" data-aos="zoom-in">
      {/* <h2 className="fw-bold" id="projects">
        Recent Projects
      </h2> */}

      <div className="all-projects mx-5 my-5 text-center">
        {projects?.length &&
          projects
            ?.slice(0, 3)
            .map((project) => (
              <Project key={project.id} project={project}></Project>
            ))}
      </div>
    </div>
  );
};

export default AllProjects;
