import React from "react";
import JotformEmbed from "react-jotform-embed";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <div className="contact">
      <div>
        <JotformEmbed src="https://form.jotform.com/223432895124456" />
      </div>
    </div>
  );
};

export default ContactMe;
