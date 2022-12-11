import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Project = ({ project }) => {
  const { title, img, details, live } = project;
  return (
    <div>
      <Card style={{}} className="my-4">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Live Demo</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
