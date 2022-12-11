import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebook } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="mt-5 about">
      <h2>About Me</h2>
      <img
        src="https://i.ibb.co/c25GsfB/removed-bg.png"
        alt="removed-bg"
        border="0"
        className="my-image-2 img-fluid mt-5"
      ></img>
      <h2 className="my-name pt-2">RABBI AHEMED</h2>
      <p className="fw-bold" style={{ textAlign: "start" }}>
        Hi I am Rabbi. A MERN stack Developer from Bangladesh. I love
        coding,solving problems,building projects,reading books. I believe
        ,there's no limit of learning!
      </p>
      <h2>MY SKILLS</h2>
      <div className="skills">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          alt="html5"
          srcSet=""
          id="html"
        />
        <img
          className="logos"
          src="https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png"
          alt="css"
          srcSet=""
        />
        <img
          className="logos"
          src="https://live.staticflickr.com/65535/52412638962_12e932256a_o.png"
          alt="javascript"
          srcSet=""
        />
        <img
          className="logos"
          src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png"
          alt="react"
          srcSet=""
        />
        <img src="https://i.ibb.co/LrSQVXB/firebase-icon.png" alt="" />
      </div>
      <div className="fw-bold py-2" style={{ textAlign: "start" }}>
        <p>Email: rabbiahemed1@gmail.com</p>
        <p>Primary Contact No: +8801791-177273</p>
        <p>Secondary Contact No: +8801884-418569</p>
        <p>Address: Dhaka,Bangladesh.</p>
      </div>
      <div>
        <FontAwesomeIcon icon={FaFacebook} />

        <a
          className="social"
          href="https://www.facebook.com/rabbiahmedlimon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook></FaFacebook>
        </a>
        <a
          className="social"
          href="https://github.com/RabbiAhemed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub></FaGithub>
        </a>
        <a
          className="social"
          href="https://www.linkedin.com/in/rabbi-ahemed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
    </div>
  );
};

export default About;
