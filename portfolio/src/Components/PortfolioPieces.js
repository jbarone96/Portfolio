import React from "react";
import { ListGroup } from "react-bootstrap";

const PortfolioPieces = () => {
  return (
    <>
      <h2 className="portfolio-pieces">Portfolio Pieces</h2>
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
          href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96"
        >
          <div className="item">Capstone Project</div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default PortfolioPieces;
