import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/MyNavbar.module.css";
import MyNavbarState from "../../enums/MyNavbarState";
import SearchBar from "../employee/SearchBar";
import { Add, Article, EditRounded, Logout } from "@mui/icons-material";
import { Menu, MenuItem, Skeleton } from "@mui/material";
import { useUser } from "../../context/userContext";
import secureLocalStorage from "react-secure-storage";


function MyNavbar(props) {
  const navigate = useNavigate();
  const userProvider = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const signOut = () => {
    userProvider.clearUserData();
    secureLocalStorage.removeItem('userData');
    navigate('/', { state: { isEmployeeSettings: true } });
    handleClose();
  }

  return (
    <>
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
              {/* <Link to="/register">
                <button className={styles.registerButton}>Sign Up</button>
              </Link> */}
            </div>
          )
        }
        {
          props.currentState == MyNavbarState.EMPLOYEE &&
          (
            <>
              <SearchBar searchUpdates={(val) => props.searchUpdates(val)} />
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <span style={{ color: "white", margin: "0 10px", minWidth: "5vw" }}>{!userProvider.user ? "" : `Hello, ${userProvider.user.name}`}</span>
                <button className={styles.loginButton} onClick={handleClick}>Profile</button>
                <Menu
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  <MenuItem onClick={() => {
                    navigate('/fill-employee-details', { state: { isSettings: true } });
                    handleClose();
                  }}
                  ><EditRounded style={{ margin: "10px" }} /> Edit Profile</MenuItem>
                  <MenuItem onClick={() => {
                    navigate('/jobs-applied');
                    handleClose();
                  }}
                  ><Article style={{ margin: "10px" }} /> My Applications</MenuItem>
                  <MenuItem onClick={() => {
                    signOut()
                  }}
                  ><Logout style={{ margin: "10px" }} /> Sign Out</MenuItem>
                </Menu>
              </div>
            </>
          )
        }
        {
          props.currentState == MyNavbarState.EMPLOYER &&
          (
            <>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <span style={{ color: "white", margin: "0 10px", minWidth: "5vw" }}>{!userProvider.user ? "" : `Hello, ${userProvider.user.name}`}</span>
                <button className={styles.registerButton} onClick={() => navigate("/employer-create-job")} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}><Add /> Post a Job</button>
                <button className={styles.loginButton} onClick={handleClick}>Profile</button>
                <Menu
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  <MenuItem onClick={() => {
                    navigate('/fill-employer-details', { state: { isSettings: true } });
                    handleClose();
                  }}
                  ><EditRounded style={{ margin: "10px" }} /> Edit Profile</MenuItem>
                  <MenuItem onClick={() => {
                    signOut()
                  }}
                  ><Logout style={{ margin: "10px" }} /> Sign Out</MenuItem>
                </Menu>
              </div>
            </>
          )
        }

      </nav>
    </>
  );
}

const imageStyles = {
  width: "200px", // Set the width
  height: "auto", // Maintain  aspect ratio
  borderRadius: "30px", // Create a circular image
  // border: "2px solid ", // Add a border
};

export default MyNavbar;
