import React from "react";
// import Particles from "react-particles-js";
// import particlesConfig from "../../ParticlesConfig";
import "./Header.css";

import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <div className="header">
      <div className="my-intro  animate__animated animate__fadeInLeft">
        {/* <strong>Hi There, I am</strong> */}
        {/* <h2 className="my-name fw-bold">MD. RABBI AHEMED</h2> */}
        <h1 className="my-name fw-bold">Hi, I’m Rabbi.</h1>
        <p>
          <TypeAnimation
            className="typing-animation"
            // Same String at the start will only be typed once, initially
            sequence={[
              "Web Developer",
              1000,
              "Programmer",
              1000,
              "Tech Lover",
              1000,
            ]}
            speed={60} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "6vh" }}
            // style={{ fontSize: "2em" }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </p>

        <a
          href="https://drive.google.com/file/d/1XchSnB3eGOZ5sw6ZGByf8d1ndahG25B7/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="download-button">
            <div className="docs">
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                height="20"
                width="20"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line y2="13" x2="8" y1="13" x1="16"></line>
                <line y2="17" x2="8" y1="17" x1="16"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              DOWNLOAD RESUME
            </div>
            <div className="download">
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line y2="3" x2="12" y1="15" x1="12"></line>
              </svg>
            </div>
          </button>
        </a>
      </div>

      <div className="my-image animate__animated animate__fadeInRight">
        <img
          src="https://i.ibb.co/c25GsfB/removed-bg.png"
          alt="removed-bg"
          border="0"
          className="img-fluid rounded-circle"
        />
      </div>
      {/* <Test></Test> */}
      {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
    </div>
  );
};

export default Header;
