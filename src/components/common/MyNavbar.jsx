import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/MyNavbar.module.css";
import MyNavbarState from "../../enums/MyNavbarState";
import SearchBar from "../employee/SearchBar";
import { Add, Settings } from "@mui/icons-material";


function MyNavbar(props) {
  const navigate = useNavigate();

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
            <SearchBar searchUpdates={(val) => props.searchUpdates(val)} />
            <div>
              <button className={styles.registerButton} onClick={() => navigate('/fill-employee-details', { state: { isEmployeeSettings: true } })}><Settings /></button>
              <button className={styles.loginButton} onClick={() => navigate('/')}>Sign Out</button>
            </div>
          </>
        )
      }
      {
        props.currentState == MyNavbarState.EMPLOYER &&
        (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button className={styles.registerButton} onClick={() => navigate("/employer-create-job")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Add /> Post a Job</button>
              <button className={styles.loginButton} onClick={() => navigate('/')}>Sign Out</button>
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
