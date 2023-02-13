import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./ProjectDetail.css";
const ProjectDetail = () => {
  const project = useLoaderData();
  const { title, images, git, details, live, features } = project;

  const client = git[0]?.client;
  const server = git[1]?.server;

  return (
    <div>
      <section className="project-hero py-5 bg-info">
        <h1 className="my-5 fw-bold">{title}</h1>
        <h5 className="my-5">
          This page contains the details of {title} Website which includes the
          Project Overview, Tools Used and Live Links of the project
        </h5>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <Button variant="warning" className="text-white fw-bold mb-5">
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
            <Button variant="warning" className="text-white fw-bold mb-5">
              Github Client Repo
            </Button>
          </a>
          {git[1]?.server && (
            <a href={server} target="_blank" rel="noopener noreferrer">
              <Button variant="warning" className="text-white fw-bold mb-5">
                Github Server Repo
              </Button>
            </a>
          )}
        </div>
      </section>
      {/* Carousel & Project Overview */}
      <section className="project-main m-5">
        {/* carousel container */}
        <Container>
          <Carousel
            className="mx-auto text-center border border-white rounded"
            id="slider"
            variant="dark"
          >
            {images.map((pic, index) => (
              <Carousel.Item interval={2000}>
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
        <Container className="mx-auto project-overview">
          <h3 className="fw-bold">Project Overview</h3>

          <p id="project-detail">{details}</p>
          <div className="my-5">
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
