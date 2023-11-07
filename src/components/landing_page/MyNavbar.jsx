import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function MyNavbar() {
  return (
    <nav className={styles.navbar} style={{ width: "100%" }}>
      <Link to="/" className="navbar-brand mx-3">
        <img src="/LOGO_transparent.png" alt="Logo" style={imageStyles} />
      </Link>
      <div className="nav">
      <Link to="/login">
          <button className={styles.loginButton}>Sign In</button>
        </Link>
        <Link to="/register">
          <button className={styles.registerButton}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

const imageStyles = {
  width: "200px", // Set the width
  height: "auto", // Maintain  aspect ratio
  borderRadius: "30px", // Create a circular image
  // border: "2px solid ", // Add a border
};

export default MyNavbar;
