import React from "react";
import { ListGroup } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <h2 className="resume">My Resume</h2>

      <h1 className="text-title">Jordan Barone</h1>
      <h3 className="text">Front End Software Developer</h3>
      <h5 className="text">
        Apex, NC 27502 | j.barone024@gmail.com | 919-924-6834
      </h5>
      <ListGroup defaultActiveKey="#link1" horizontal>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent"
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
        - Kept and maintained a 4.0 GPA throughout my time at Kenzie Academy
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
        Team Leader | Connect Four Game | JavaScript, HTML/CSS
      </h6>
      <a
        href="https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jbarone96"
        className="text-link"
      >
        Connect Four Game
      </a>
      <h6 className="text-ed">
        Kenzie Cart | JavaScript, HTML/CSS, React.Js, Express, Node.js, MongoDB
      </h6>
      <a
        href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        className="text-link"
      >
        Kenzie Cart
      </a>
      <p className="text-ed">
        - Designed how the game board displayed on the page with the use of CSS
        properties to allow the board to look just like it would in the real
        game.
      </p>
      <p className="text-ed">
        - Effectively dealt with the possibility of edge cases to prevent
        inaccuracy in the game board when displaying the winning combinations
        and created an ideal way to determine the winning combinations for the
        game using JavaScript functions.
      </p>
      <p className="text-ed">
        - Properly debugged and maneuvered around problems in code that would
        cause blocks of code not to run in the correct fashion.
      </p>
      <p className="text-ed">
        - Developed an online store allowing users to fully interact with the
        webpage and designed methods to allow users to place an order, including
        entering billing and shipping addresses, credit-card information and
        filling out an order form.
      </p>
      <p className="text-ed">
        - Properly coded the process of order submission that sends the order
        data to be stored in the database in the proper JSON format for ease of
        reading through order details on the back end.
      </p>
      <p className="text-ed">
        - Enhanced the styling and format of the webpage using React-Bootstrap
        with things such as Toasts, Navbars and themes.
      </p>
      <h5 className="title-ed">Work Experience</h5>
      <h6 className="text-ed">Amazon, See It Thru Logistics LLC</h6>
      <h6 className="text-ed">
        <em>Dispatch/Leadership, Fleet Manager</em> | Feb. 2021 - Present
      </h6>
      <p className="text-ed">
        - Pioneered an organization checklist and flow for Amazon drivers to
        better organize their vans and mentored drivers to allow for more
        efficient delivery of packages.
      </p>
      <p className="text-ed">
        - Assisted in the development of dispatcher job responsibilities which
        included a daily reconciliation list for dispatchers to follow.
      </p>
      <p className="text-ed">
        - Facilitated the process for drivers to contact dispatchers with any
        problems out on the road and created a new method for the drivers to use
        on the road.
      </p>
      <h6 className="text-ed">Mr.Fixit</h6>
      <h6 className="text-ed">
        <em>Lead Handyman</em> | Jul. 2019 - Feb. 2021
      </h6>
      <p className="text-ed">
        - Assisted and taught other handymen essential skills regarding home
        improvement and correct techniques to complete jobs quickly and
        properly.
      </p>
      <p className="text-ed">
        - Ensured and maintain excellent skills in painting, electrical work,
        carpentry, and plumbing to install or fix customer’s items.
      </p>
      <p className="text-ed">
        - Provided a variety of landscaping projects ranging from laying mulch
        and pine straw to building and adding to stone patios.
      </p>
      <h6 className="text-ed">CVS Pharmacy</h6>
      <h6 className="text-ed">
        <em>Shift Supervisor</em> | Apr. 2017 - Jul. 2019
      </h6>
      <p className="text-ed">
        - Developed a new store layout and product placement model equating to
        an increase in store profits over the first 3 fiscal quarters at this
        store location.
      </p>
      <p className="text-ed">
        - Performed opening and closing duties as a key-holder ensuring the
        store was secure in the evening and the nightly deposit was accounted
        for.
      </p>
      <p className="text-ed">
        - Oversaw a team of 8 employees and created a method to improve customer
        feedback that grew 50% during my time at this location.
      </p>
    </>
  );
};

export default Resume;
