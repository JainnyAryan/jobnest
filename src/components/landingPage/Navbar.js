import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import logoImage from "../LOGO/LOGO_transparent.png";

function Navbar() {
  return (
    <nav className="navbar" style={{ width: "100%" }}>
      <Link to="/" className="navbar-brand mx-3">
        <img src={logoImage} alt="Logo" style={imageStyles} />
      </Link>
      <div className="nav">
        <button id="loginButton">Login</button>
        <Link to="/register">
          <button id="registerButton">Register Now</button>
        </Link>
      </div>
    </nav>
  );
}

const imageStyles = {
  width: "200px", // Set the width
  height: "auto", // Maintain aspect ratio
  borderRadius: "30px", // Create a circular image
  // border: "2px solid ", // Add a border
};

export default Navbar;
