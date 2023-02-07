import React from "react";
import "./Footer.css";
import { MdCopyright, MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaRegCopyright,
  FaGithub,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
// import { FaGithub} from "react-icons/fi";
import mySvg from "../../rabbi.svg";
const Footer = () => {
  return (
    <div className="footer text-white py-5 ">
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
      <img
        src={mySvg}
        // width="20%"
        // height="50"
        // className="logo"
        id="footer-logo"
        alt=""
      />
      <br />
      <br />
      <h4 id="footer-tagline" className="text-center mx-auto">
        Living, learning, & leveling up one day at a time.
      </h4>
      <br />
      <br />
      <div className="mx-auto text-center mb-5">
        <FaLinkedinIn className="footer-icon mx-4"></FaLinkedinIn>
        <FaGithub className="footer-icon mx-4"></FaGithub>
        <MdOutlineEmail className="footer-icon mx-4"></MdOutlineEmail>
        <FaFacebook className="footer-icon mx-4"></FaFacebook>
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
