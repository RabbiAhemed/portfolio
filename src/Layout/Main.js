import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import WhatsappChat from "../components/WhatsappChat/WhatsappChat";

const Main = () => {
  return (
    <div>
      <Menu></Menu>
      <WhatsappChat></WhatsappChat>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
