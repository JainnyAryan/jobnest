import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

import styles from "./styles/SignupPage.module.css";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const onClick = () => {
    if (username === "employer") {
      navigate("/employer");
    } else if (username === "employee") {
      navigate("/employee");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("/background1.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "100vh",
      }}
    >
      <div className={styles.box}>
      <ArrowBack className={styles.backIcon} onClick={() => navigate("/")} fontSize="large" />

        <div
          className={styles.registerBox}
        >
          <div className={styles.lottieDiv}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loginAnim,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              isClickToPauseDisabled={true}
              style={{
                padding: "0px",
                margin: "0px",
                height: "40vw",
                width: "40vw",
                cursor: "default",
              }}
            />
          </div>
          <div
            className={styles.formBox}
          >
            <img
              src="/LOGO_transparent.png"
              alt="LOGO-transparent"
              border="0"
              width={"100%"}
              style={{ borderTopRightRadius: "20px", marginTop:"30px" }}
            ></img>

            <div style={{ display: "flex", flexDirection: "column", padding: "0 10%", overflow: "auto" }}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: "#6CE4F3" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter the name"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                  }}
                  onChange={handleUsername}
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="username" style={{ color: "#6CE4F3" }}>
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter the Password"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                    textAlign: "left",
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email" style={{ color: "#6CE4F3" }}>
                  Email
                </label>
                <input
                  type="password"
                  name="email"
                  placeholder="Enter the email"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                    textAlign: "left",
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password" style={{ color: "#6CE4F3" }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the Password"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                    textAlign: "left",
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="confirmpassword" style={{ color: "#6CE4F3" }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Enter the Password"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                    textAlign: "left",
                  }}
                />
              </div>
              <button
                className="btn mt-4"
                style={{ borderRadius: "10px", backgroundColor: "#6CE4F3", color: "#232423" }}
                onClick={onClick}
              >
                Register
              </button>
              <p style={{ color: "#6CE4F3", marginTop: "2vh" }}>
                Already have an account?
                <a href="" style={{ marginLeft: "5px", color: "#6CE4F3" }} onClick={() => navigate('/login')}>Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
