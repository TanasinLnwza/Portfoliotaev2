import React from "react";
import "./MainNavbar.css";
import SVGAnimation from "./SVGAnimation";
function MainNavbar() {
  return (
    <div className="Logocon">
      <div><SVGAnimation /></div>
      <div className="Navbarcon">
        {" "}
        <div className="Navitem">Home</div>
        <div className="Navitem">About</div>
        <div className="Navitem">Education</div>
        <div className="Navitem">MyProject</div>
      </div>
    </div>
  );
}

export default MainNavbar;
