import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Test.css";
const Test = () => {
  return (
    <div>
      <Row xs={1} md={2} className="justify-content-between">
        <Col xs={12} md={3}>
          <Container>
            <div className="info">
              <div className="icons">
                <img
                  src="https://i.ibb.co/F5j5b34/icons8-phone-24.png"
                  alt=""
                />
                {/* <FaPhoneAlt /> */}
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <strong>+880-1791-177273</strong>
              </div>
            </div>
            <div className="info">
              <div>
                <img
                  className="icons"
                  src="https://i.ibb.co/dgKtK6p/mail-50.png"
                  alt=""
                />
                {/* <FaEnvelope /> */}
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <strong>rabbiahemed1@gmail.com</strong>
              </div>
            </div>
            <div className="info">
              <div>
                <img
                  className="icons"
                  src="https://i.ibb.co/L94n6tr/home-address-50.png"
                  alt=""
                />
                {/* <FaLocationArrow /> */}
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <strong>Jhenaidah, Bangladesh - 7300</strong>
              </div>
            </div>
          </Container>
          <div id="bottom-icon-container" className="text-start mb-5 mt-5">
            <a
              href="https://www.linkedin.com/in/rabbi-ahemed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="linkedin"
                className="bottom-icon me-5"
                src="https://i.ibb.co/BgzGKj2/linkedin-circled-50.png"
                alt=""
              />
            </a>
            <a
              href="https://github.com/RabbiAhemed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="github"
                className="bottom-icon me-5"
                src="https://i.ibb.co/RNpBrdt/github-50.png"
                alt=""
              />
            </a>
            <a
              href="https://www.facebook.com/rabbiahmedlimon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="facebook"
                className="bottom-icon me-5"
                src="https://i.ibb.co/pJCKQvB/facebook-50.png"
                alt=""
              />
            </a>
          </div>
        </Col>{" "}
        <Col xs={12} md={7} className=" animate__animated animate__fadeInRight">
          {/* <strong>
              Feel free to contact me by submitting the form below and I will
              get back to you as soon as possible.
            </strong> */}
          {/* form start */}
          <Form className="text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="client-name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label required>
                Email address <span className="star">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                name="client-email-address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email Subject"
                name="client-email-subject"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Message <span className="star">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="message"
                required
                name="client-email-message"
              />
            </Form.Group>
            {/* <Button
                variant="light border border-dark "
                className="view fw-bold px-4"
              >
                Submit
              </Button> */}
            <button className="continue-application">
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Send
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Test;
