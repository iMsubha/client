import React from "react";
import Nav from "react-bootstrap/Nav";
import './Navigation.css';
const Navigation = () => {
  return (
      <Nav className="navigation d-flex justify-content-end">
        <Nav.Link href="#home" className="dark-color">Home</Nav.Link>
        <Nav.Link href="#features" className="dark-color">About</Nav.Link>
        <Nav.Link href="#pricing" className="dark-color">Dental Services</Nav.Link>
        <Nav.Link href="#pricing" className="text-white">Reviews</Nav.Link>
        <Nav.Link href="#pricing" className="text-white">Blog</Nav.Link>
        <Nav.Link href="#pricing" className="text-white">Contact Us</Nav.Link>
      </Nav>
    
  );
};

export default Navigation;
