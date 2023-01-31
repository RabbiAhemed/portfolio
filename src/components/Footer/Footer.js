import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer text-white py-5 ">
      <img
        src="https://i.ibb.co/wdqJgzK/cover-removebg-preview.png"
        // width="20%"
        height="50"
        className="logo"
        alt="React Bootstrap logo"
      />
      <br />
      <br />

      <div>
        <p className="">
          <span className="">Handcrafted by Rabbi Ahemed</span>.
        </p>
        <p className="copyright">Copyright © 2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
