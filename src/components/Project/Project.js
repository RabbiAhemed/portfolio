import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Project.css";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  const { title, banner, details, live } = project;

  return (
    <div>
      <Card style={{}} className="my-4">
        <Card.Img variant="top" src={banner} className="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details.slice(0, 120)}...</Card.Text>
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
