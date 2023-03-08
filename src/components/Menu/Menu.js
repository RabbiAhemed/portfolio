import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Menu.css";
import mySvg from "../../rabbi-black.svg";

const Menu = () => {
  return (
    <div id="top-menu">
      <Navbar bg="" expand="lg">
        <Container className="menu">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                // src="https://i.ibb.co/wdqJgzK/cover-removebg-preview.png"
                src={mySvg}
                width="100%"
                height="50"
                className="d-inline-block align-top rabbi py-2 links"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto text-black"></Nav>
            <Nav>
              <Link
                to="/"
                className="mx-2 text-black fw-bold links"
                href="home"
              >
                {/* <Link to="/">Home</Link> */}
                Home
              </Link>
              <Link
                to="/about-me"
                className="mx-2 text-black fw-bold links"
                // href="#about"
              >
                About Me
              </Link>
              <Link
                to="/skills"
                className="mx-2 text-black fw-bold links"
                // href="#skills"
              >
                Skills
              </Link>
              <Link
                to="/all-projects"
                className="mx-2 text-black fw-bold links"
                href="#projects"
              >
                Projects
              </Link>
              <Link
                to="/contact-me"
                className="mx-2 text-black fw-bold links"
                href="#contact-section"
              >
                Contact Me
              </Link>
              <Link
                to="/blogs"
                className="mx-2 text-black fw-bold links"
                href="#contact-section"
              >
                Blogs
              </Link>
              {/* <Link to="/blogs" className="mt-2" id="blog-link">
                Blogs
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
