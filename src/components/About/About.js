import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
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
    <div>
      <div className="about" id="about" data-aos="zoom-in">
        <div id="about-me">
          <h2 className="fw-bold">About Me</h2>
          <p style={myStyle} id="am-subtitle">
            Here you will find more information about me, what I do, my
            interests and plans about my career.
          </p>
        </div>

        <img
          // src="https://i.ibb.co/c25GsfB/removed-bg.png"
          src="https://i.ibb.co/BwpBcL8/cropped-1.png"
          alt="removed-bg"
          border="0"
          className="my-image-2 img-fluid"
        ></img>
        {/* <h2
          className="my-name pt-2 animate__animated animate__zoomIn"
          id="my-name"
        >
          MD. RABBI AHEMED
        </h2> */}
        {/*  that leads to the success of the overall product */}

        <div className="about-para">
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications. Check out some of my work in the Projects section.
            I'm interested in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack
            web development. I am a hardworking, confident, enthusiastic Web
            developer and I want to utilize my knowledge and personal skills in
            Web Development. Also eagerly wants to serve a professional
            organization to the best of my knowledge with true dedication, hard
            work, and commitment. I'm open to Job opportunities where I can
            contribute, learn and grow.
          </p>
          {/*  If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me. */}
        </div>
        {/* <h2>MY SKILLS</h2> */}
        {/* <div className="skills">
        <div className="skills-image front-end">
          <img
            className="logos"
            src="https://i.ibb.co/C0r8wrz/icons8-html-5-96.png"
            alt="html5"
            id="html"
          />
          <img
            className="logos"
            src="https://i.ibb.co/3WFLPP6/icons8-bootstrap-96.png"
            alt="bootstrap"
            id="bootstrap"
          />
          <img
            className="logos"
            src="https://i.ibb.co/ZNhSWfH/tailwind-css-24.png"
            alt="tailwind"
            id="tailwind"
          />
          <img
            className="logos"
            src="https://i.ibb.co/pbwWgzd/javascript-24.png"
            alt="javascript"
            id="javascript"
          />
          <img
            className="logos"
            src="https://i.ibb.co/XCMSVCH/react-24.png"
            alt="react"
            id="react"
          />
          <img
            className="logos"
            src="https://i.ibb.co/YWCtWDb/firebase-24.png"
            alt="firebase"
            id="firebase"
          />
        </div>
        <div className="skills-image back-end">
          <img
            className="logos"
            src="https://i.ibb.co/XFNJq0C/mongodb-24.png"
            alt="mongodb"
            id="mongodb"
          />
          <img
            className="logos"
            src="https://i.ibb.co/WPySNds/express-js-icon-12.png"
            alt="express"
            id="express"
          />

          <img
            className="logos"
            src="https://i.ibb.co/WDd3jHt/nodejs.png"
            alt="nodejs"
            id="nodejs"
          />
        </div>
      </div> */}
        <div className="informations">
          <div className="py-2 info-left" style={{ textAlign: "start" }}>
            {/* <p>Email: rabbiahemed1@gmail.com</p>
            <p>Contact No: +8801791-177273</p>
            <p>Address: Dhaka,Bangladesh.</p> */}
          </div>

          <div className="py-2  info-right" style={{ textAlign: "start" }}>
            {/* <p>Linkedin: Md. Rabbi Ahemed</p>
            <p>
              Github:
              <a
                href="https://github.com/RabbiAhemed"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/RabbiAhemed
              </a>
            </p>
            <p id="facebook">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/rabbiahmedlimon"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.facebook.com/rabbiahmedlimon
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
