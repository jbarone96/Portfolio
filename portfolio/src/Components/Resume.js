import React from "react";
import { ListGroup } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <h2 className="resume">My Resume</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent m-auto"
          href="https://www.linkedin.com/in/jordan-barone96/"
        >
          <div className="item">LinkedIn</div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent m-auto"
          href="https://github.com/jbarone96"
        >
          <div className="item">GitHub</div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Resume;
