import React from "react";
import { ListGroup } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <h2 className="resume">My Resume</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent width-250px"
          href="https://www.linkedin.com/in/jordan-barone96/"
        >
          <div className="item">LinkedIn</div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent"
          href="https://github.com/jbarone96"
        >
          <div className="item">GitHub</div>
        </ListGroup.Item>
      </ListGroup>
      <h1 className="text-title">Jordan Barone</h1>
      <h3 className="text">Front End Software Developer</h3>
      <h5 className="text">
        Apex, NC 27502 (prefer remote) j.barone024@gmail.com | 919-924-6834
        https://www.linkedin.com/in/jordan-barone96/ |
        https://github.com/jbarone96
      </h5>
      <p className="text">
        Motivated student with experience in problem solving and computers.
        Eager to apply my recent education of front-end development and
        leadership, organization, and prioritization to develop efficient and
        organized code to improve team code and thought process within the
        remote web developer role.
        <br />
        <br />
      </p>
      <h5 className="title-ed">Education</h5>
      <h6 className="text-ed">
        Kenzie Academy from SNHU | Hands-On, Project-Based Training Full Stack
        Web Development
      </h6>
      <h6 className="text-ed">
        Indianapolis, IN (remote) Expected: Oct., 2022
      </h6>
      <p className="text-ed">
        - HTML, CSS, JavaScript, React, Node.js, Express, MongoDB
      </p>
      <p className="text-ed">
        - Learned valuable skills and proper ways to write and organize code
      </p>
      <p className="text-ed">
        - Kept a high GPA throughout my time at Kenzie Academy
      </p>
      <br />
      <h6 className="text-ed">
        East Carolina University Bachelor of Science - Criminal Justice
      </h6>
      <h6 className="text-ed">Greenville, NC Graduated: May., 2019</h6>
      <p className="text-ed">- GPA: 3.7</p>
      <p className="text-ed">
        - Received Dean's List for multiple semesters consecutively
      </p>
      <h5 className="title-ed">Skills</h5>
      <p className="text-ed">
        <b>Technical Skills:</b> HTML, CSS, JavaScript, ReactJs, VSCode, GitHub,
        Express, Node.js, MongoDB
      </p>
      <p className="text-ed">
        <b>Marketable Skills:</b> Critical thinking, Problem solving,
        Leadership, Patience, Prioritization
      </p>

      <h5 className="title-ed">Technical Project Highlights</h5>
      <h6 className="text-ed">
        Team Leader | Connect Four Game | JavaScript, HTML, CSS
      </h6>
      <a
        href="https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jbarone96"
        className="text"
      >
        Link
      </a>
      <p className="text-ed">
        - Developed a “skeleton” of code with appropriate functions that were
        needed to create the game effectively.
      </p>
      <p className="text-ed">
        - Created an ideal way to determine the winning combinations for the
        game using JavaScript functions.
      </p>
      <p className="text-ed">
        - Designed how the game board displayed on the page with the use of CSS
        properties to allow the board to look just like it would in the real
        game.
      </p>
      <p className="text-ed">
        - Effectively dealt with the possibility of edge cases to prevent
        inaccuracy in the game board when displaying the winning combinations.
      </p>
      <p className="text-ed">
        - Properly debugged and maneuvered around problems in code that would
        cause blocks of code not to run in the correct fashion.
      </p>
    </>
  );
};

export default Resume;
