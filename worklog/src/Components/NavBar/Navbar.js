import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbar() {
  return (
    <div className="navbarDiv ">
      <div className="container navbars">
        <div className="buttons">
          <Button variant="outline-primary">Login</Button>
          <Button variant="outline-primary">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
