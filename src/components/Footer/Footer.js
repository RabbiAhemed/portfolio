import React from "react";
import "./Footer.css";
import { MdCopyright, MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaRegCopyright,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
// import { FaGithub} from "react-icons/fi";
import mySvg from "../../rabbi.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer text-white py-5">
      {/* <img
        src="https://i.ibb.co/wdqJgzK/cover-removebg-preview.png"
        // width="20%"
        height="50"
        // className="logo"
        id="footer-logo"
        alt="React Bootstrap logo"
      /> */}
      {/* <img
        src="https://i.ibb.co/1TWtYSj/r.png"
        // width="20%"
        // height="50"
        // className="logo"
        id="footer-logo"
        alt=""
      /> */}
      {/* <img
        src="https://i.ibb.co/wwVQB2B/r.png"
        // width="20%"
        // height="50"
        // className="logo"
        id="footer-logo"
        alt=""
      /> */}
      <Link to="/">
        <img
          src={mySvg}
          // width="20%"
          // height="50"
          // className="mt-1"
          id="footer-logo"
          alt=""
        />
      </Link>
      <br />
      <br />
      <h4 id="footer-tagline" className="text-center mx-auto">
        Living, learning, & leveling up one day at a time.
      </h4>
      <br />
      <br />
      <div className="mx-auto text-center mb-5 social-icon">
        <a
          href="https://www.linkedin.com/in/rabbi-ahemed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="footer-icon mx-4"></FaLinkedinIn>
        </a>
        <a
          href="https://github.com/RabbiAhemed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon mx-4"></FaGithub>
        </a>
        <a
          href="mailto:rabbiahemed1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineEmail className="footer-icon mx-4"></MdOutlineEmail>
        </a>
        <a
          href="https://www.facebook.com/rabbiahmedlimon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="footer-icon mx-4"></FaFacebook>
        </a>
        {/* <FaPhoneAlt></FaPhoneAlt> */}
      </div>
      <div>
        {/* <p className="">
          <span className="">Handcrafted by Rabbi Ahemed</span>.
        </p> */}
        <p className="copyright">
          Handcrafted by me <FaRegCopyright /> 2023
        </p>
        {/* <MdCopyright /> */}
      </div>
    </div>
  );
};

export default Footer;
