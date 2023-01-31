import React from "react";
import JotformEmbed from "react-jotform-embed";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contact">
      <div id="contact">
        <h2 className="fw-bold">Contact Me</h2>
        <p className="font-para">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
        <JotformEmbed src="https://form.jotform.com/223432895124456" />
      </div>
    </div>
  );
};

export default ContactMe;
