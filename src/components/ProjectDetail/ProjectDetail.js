import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./ProjectDetail.css";
const ProjectDetail = () => {
  const project = useLoaderData();
  const { title, images, git, details, tools_technology, live, features } =
    project;
  const client = git[0]?.client;
  const server = git[1]?.server;

  return (
    <div>
      <section className="project-hero py-5 bg-info">
        <h1 className="my-5 fw-bold" id="p-title">
          {title}
        </h1>
        <h5 className="my-5 px-2">
          This page contains the details of {title} Website which includes the
          Project Overview, Technologies Used, Features and Live Links of the
          project
        </h5>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <Button variant="dark" className="text-white fw-bold mb-5 link-btn">
            Visit Website
          </Button>
        </a>
        <div className="mx-2">
          <a
            href={client}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
          >
            <Button variant="dark" className="text-white fw-bold mb-5 link-btn">
              Github Client Repository
            </Button>
          </a>
          {git[1]?.server && (
            <a href={server} target="_blank" rel="noopener noreferrer">
              <Button
                variant="dark"
                className="text-white fw-bold mb-5 link-btn"
              >
                Github Server Repository
              </Button>
            </a>
          )}
        </div>
      </section>
      {/* Carousel & Project Overview */}
      <section className="project-main my-5 mx-3">
        {/* carousel container */}
        <Container>
          <Carousel
            className="mx-auto text-center border border-white rounded"
            id="slider"
            variant="dark"
          >
            {images.map((pic, index) => (
              <Carousel.Item interval={2000} key={index}>
                <img
                  className="screenshot rounded"
                  src={pic}
                  alt="First slide"
                  key={index}
                />
                {/* <Carousel.Caption>{index + 1}</Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        {/* Project Overview */}
        <Container className="mx-auto project-overview">
          <h3 className="fw-bold" id="po-title">
            Project Overview
          </h3>

          <p id="project-detail">{details}</p>

          {/* Tools & Technology */}
          <div className="mt-4" id="tools-tech-div">
            <h3 className="fw-bold">Technology Used</h3>
            <p style={{ textAlign: "justify" }}>{tools_technology}</p>
          </div>

          {/* Features */}
          <div className="mt-4" id="features-div">
            <h3 className="fw-bold">Features</h3>
            {features.map((feature, index) => (
              <li key={index} id="feature-list">
                {feature}
              </li>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectDetail;
