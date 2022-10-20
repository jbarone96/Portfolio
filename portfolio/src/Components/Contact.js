import React from "react";
import { Card, CardImg } from "react-bootstrap";
import Particle from "./Particle";

const Contact = () => {
  return (
    <>
      <Particle />
      <Card className="contact-card">
        <Card.Title
          className="contact-info"
          style={{
            marginTop: "10px",
            textDecoration: "underline",
            fontSize: "28px",
          }}
        >
          Contact Me
        </Card.Title>
        <Card.Text>
          <div className="contact-info">
            <strong>Email Address:</strong>
            <br />
            j.barone024@gmail.com
          </div>
          <div className="contact-info" style={{ marginTop: "10px" }}>
            <strong>Mobile Number:</strong>
            <br />
            (919) 924-6834
          </div>
          <div className="contact-info" style={{ marginTop: "10px" }}>
            <strong>LinkedIn:</strong>
            <br />
            <a href="https://www.linkedin.com/in/jordan-barone96/">
              Jordan Barone
            </a>
          </div>
        </Card.Text>
      </Card>
      {/* <ListGroup as="ol" flush>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-center align-items-cent m-auto"
        >
          <div className="list-item">
            <div className="list-item-title">Email Address</div>
            j.barone024@gmail.com
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-center align-items-cent m-auto"
        >
          <div className="list-item">
            <div className="list-item-title">Phone Number</div>
            (919) 924-6834
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-center align-items-cent m-auto"
        >
          <div className="list-item">
            <div className="list-item-title">LinkedIn</div>
            <a href="https://www.linkedin.com/in/jordan-barone96/">
              Jordan Barone
            </a>
          </div>
        </ListGroup.Item>
      </ListGroup> */}
    </>
  );
};

export default Contact;
