import React from "react";
import "./WhatsappChat.css";

const WhatsappChat = () => {
  return (
    <div>
      <a
        href="https://wa.me/8801791177273"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-anchor"
      >
        <img
          //   top={0}
          id="whatsappIcon"
          src="https://i.ibb.co/1GbsXNV/whatsapp-nobg.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default WhatsappChat;
