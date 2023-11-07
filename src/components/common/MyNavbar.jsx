import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/MyNavbar.module.css";
import MyNavbarState from "../../enums/MyNavbarState";
import SearchBar from "../employee/SearchBar";
import { Add, Settings } from "@mui/icons-material";


function MyNavbar(props) {
  return (
    <nav className={styles.navbar} style={{ width: "100%" }}>
      <Link to="/" className="navbar-brand mx-3">
        <img src="/LOGO_transparent.png" alt="Logo" style={imageStyles} />
      </Link>
      {
        props.currentState == MyNavbarState.LANDING &&
        (
          <div>
            <Link to="/login">
              <button className={styles.loginButton}>Sign In</button>
            </Link>
            <Link to="/register">
              <button className={styles.registerButton}>Sign Up</button>
            </Link>
          </div>
        )
      }
      {
        props.currentState == MyNavbarState.EMPLOYEE &&
        (
          <>
            <SearchBar />
            <div>
            <button className={styles.registerButton}><Settings/></button>
              <button className={styles.loginButton}>Sign Out</button>
            </div>
          </>
        )
      }
      {
        props.currentState == MyNavbarState.EMPLOYER &&
        (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button className={styles.registerButton} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Add /> Post a Job</button>
              <button className={styles.loginButton}>Sign Out</button>
            </div>
          </>
        )
      }
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
