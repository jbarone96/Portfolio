import React from "react";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  return (
    <div
      className="page"
      style={{
        height: "100%",
      }}
    >
      <div className="hello-section">
        <h1 className="intro">Hello and welcome...</h1>
        <h2 className="intro">To my Portfolio!</h2>
      </div>
      <Carousel variant="dark" fade>
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src="src/Components/Images/billy-huynh-W8KTS-mhFUE-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 h-400 m-auto"
            src="src/Components/Images/billy-huynh-W8KTS-mhFUE-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 h-400 m-auto"
            src="src/Components/Images/billy-huynh-W8KTS-mhFUE-unsplash.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
