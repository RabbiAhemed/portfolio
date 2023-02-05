import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Project.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = ({ project }) => {
  const { title, banner, details, live } = project;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Card style={{}} className="my-4" data-aos="flip-left" id="project">
        <Card.Img variant="top" src={banner} className="card-img" />
        <Card.Body>
          <Card.Title id="title">{title}</Card.Title>
          <Card.Text id="subtitle">{details.slice(0, 143)}...</Card.Text>
          <div className="card-btns">
            <Link className="" to={`/projects/${project.id}`}>
              <Button
                variant="light border border-dark"
                className="view fw-bold"
              >
                Details
              </Button>
            </Link>

            <a
              href={live}
              target="_blank"
              className="fw-bold"
              rel="noopener noreferrer"
            >
              <Button
                variant="light border border-dark "
                className="view fw-bold px-4"
              >
                Live
              </Button>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
