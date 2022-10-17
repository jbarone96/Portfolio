import React from "react";
import { ListGroup } from "react-bootstrap";
import Particle from "./Particle";

const PortfolioPieces = () => {
  return (
    <>
      <Particle />
      <h2 className="portfolio-pieces">Projects</h2>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent width-250px m-auto"
          href="https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jbarone96"
        >
          <div className="item">Connect Four Game</div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent m-auto"
          href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        >
          <div className="item">Kenzie Cart</div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent m-auto"
          href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        >
          <div className="item">Hardware Store</div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          className="d-flex justify-content-center align-items-cent m-auto"
          href="http://18.233.97.130/"
        >
          <div className="item">Capstone Project</div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PortfolioPieces;
