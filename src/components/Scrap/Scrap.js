import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Scrap.css";
const Scrap = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Container>
        <Row xs={1} md={2}>
          <Col xs={12} md={8}>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label required>Email address*</Form.Label>
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
                <Form.Label>Message*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="message"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={4}>
            <h1>xxxx</h1>
            <h1>xxxx</h1>
            <h1>xxxx</h1>
            <h1>xxxx</h1>
            <h1>xxxx</h1>
            <h1>xxxx</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Scrap;
