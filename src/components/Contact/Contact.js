import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  //
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "rabbi-portfolio",
        "template_ua8cy9f",
        form.current,
        "vuCxgzM77whWOz1lJ"
      )
      .then(
        (result) => {
          // alert(result.text);
          alert("email sent successfully");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="my-5" id="contact-section" data-aos="zoom-in">
      <h2 className="fw-bold">Contact Me</h2>
      <p className="contact-subtitle text-center">
        Feel free to contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <Container id="contact-container" className="mx-auto text-center">
        <Form className="text-start" ref={form} onSubmit={sendEmail}>
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
            Contact
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
