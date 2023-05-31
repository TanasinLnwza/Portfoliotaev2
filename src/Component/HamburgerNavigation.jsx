import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import SVGAnimation from "./SVGAnimation";
import Home from "../Home";
import About from "../About";
import Education from "../Education";
import MyProject from "../MyProject";

import "./MainNavbar.css";

const HamburgerNavigation = (props) => {
  return (
    <Navbar expand="lg" variant="dark"  style={{padding:10}}>
      <Navbar.Brand href="/">
        <SVGAnimation />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto " style={{padding: 12,marginBottom:21,fontSize:20,borderBottom:"4px solid #677398",borderRadius:"16px 16px 0px 0px"}}>
          <Nav.Link href="/" className={props.pagename === "homePage" ? 'active Navitem' : 'Navitem'} style={{display:"flex",justifyContent:"center",paddingLeft:20,paddingRight:20}}>
            Home
          </Nav.Link>
          <Nav.Link href="about"className={props.pagename === "aboutPage" ? 'active Navitem' : 'Navitem'} style={{display:"flex",justifyContent:"center",paddingLeft:20,paddingRight:20}}>
            About
          </Nav.Link>
          <Nav.Link href="education" className={props.pagename === "educationPage" ? 'active Navitem' : 'Navitem'}style={{display:"flex",justifyContent:"center",paddingLeft:20,paddingRight:20}}>
            Education
          </Nav.Link>
          <Nav.Link href="myproject" className={props.pagename === "myprojectPage" ? 'active Navitem' : 'Navitem'}style={{display:"flex",justifyContent:"center",paddingLeft:20,paddingRight:20}}>
            MyProject
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
};

export default HamburgerNavigation;
