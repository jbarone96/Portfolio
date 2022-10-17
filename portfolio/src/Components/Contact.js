import React from "react";
import { ListGroup } from "react-bootstrap";
import Particle from "./Particle";

const Contact = () => {
  return (
    <>
      <Particle />
      <h2 className="contact">Contact Information</h2>
      <ListGroup as="ol" flush>
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
      </ListGroup>
    </>
  );
};

export default Contact;
