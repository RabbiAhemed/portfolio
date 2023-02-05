import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Scrap.css";

const Scrap = () => {
  return (
    <div className="my-5">
      <h2 className="fw-bold">Contact Me</h2>
      <Container id="contact-container">
        <Row xs={1} md={2} className="justify-content-between">
          <Col xs={12} md={3}>
            <Container>
              <div className="info">
                <div className="icons">
                  <img
                    src="https://i.ibb.co/F5j5b34/icons8-phone-24.png"
                    alt=""
                    srcset=""
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
                    srcset=""
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
                    srcset=""
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
              <img
                id="github"
                className="bottom-icon me-5"
                src="https://i.ibb.co/BgzGKj2/linkedin-circled-50.png"
                alt=""
                srcset=""
              />
              <img
                className="bottom-icon me-5"
                src="https://i.ibb.co/RNpBrdt/github-50.png"
                alt=""
                srcset=""
              />
              <img
                className="bottom-icon me-5"
                src="https://i.ibb.co/pJCKQvB/facebook-50.png"
                alt=""
                srcset=""
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={7}
            className=" animate__animated animate__fadeInRight"
          >
            {/* <strong>
              Feel free to contact me by submitting the form below and I will
              get back to you as soon as possible.
            </strong> */}
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label required>
                  Email address <span className="star">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Email Subject" />
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
                />
              </Form.Group>
              <Button
                variant="light border border-dark "
                className="view fw-bold px-4"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Scrap;
