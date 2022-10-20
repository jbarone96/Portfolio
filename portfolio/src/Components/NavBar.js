import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Resume from "./Resume";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineMail, HiOutlineCollection } from "react-icons/hi";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherNight,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
} from "react-icons/ti";

const NavBar = () => {
  return (
    <>
      <Navbar variant="dark" style={{ fontFamily: "Rubik" }}>
        <Container>
          <Navbar.Brand
            style={{ position: "relative", left: "-160px", fontSize: "24px" }}
          >
            Jordan's Portfolio
          </Navbar.Brand>
          <Nav style={{ position: "relative", right: "-190px" }}>
            <Link className="nav-link" to="/">
              <BiHomeAlt style={{ marginBottom: "5px", marginRight: "4px" }} />
              Home
            </Link>
            <Link className="nav-link" to="/Projects">
              <HiOutlineCollection
                style={{ marginBottom: "5px", marginRight: "4px" }}
              />
              Projects
            </Link>
            <Link className="nav-link" to="/Resume">
              <IoDocumentTextOutline
                style={{ marginBottom: "5px", marginRight: "4px" }}
              />
              Resume
            </Link>
            <Link className="nav-link" to="/About">
              <AiOutlineUser
                style={{ marginBottom: "4px", marginRight: "4px" }}
              />
              About
            </Link>
            <Link className="nav-link" to="/Contact">
              <HiOutlineMail
                style={{ marginBottom: "3px", marginRight: "4px" }}
              />
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
