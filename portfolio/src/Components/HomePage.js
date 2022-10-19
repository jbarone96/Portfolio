import React from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";

const HomePage = () => {
  let date = new Date();
  let time = date.getHours();
  console.log(time);
  let morning = "Good Morning!";
  let afternoon = "Good Afternoon!";
  let evening = "Good Evening!";
  const displayTimeOfDay = () => {
    if (time < 12) {
      return morning;
    } else if (time < 18) {
      return afternoon;
    } else {
      return evening;
    }
  };
  return (
    <>
      <Container>
        <Particle />
        <div
          className="page"
          style={{
            height: "100%",
          }}
        >
          <div className="hello-section">
            <h1 className="intro">{displayTimeOfDay()}</h1>
            <h1 className="intro">
              I'm Jordan
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏽
              </span>
            </h1>
            <h2
              className="intro"
              style={{ fontSize: "24px", marginTop: "20px" }}
            >
              A Software Developer|{" "}
            </h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
