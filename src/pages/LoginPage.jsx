import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import styles from "./styles/LoginPage.module.css";
import { ArrowBack } from "@mui/icons-material";

const LoginPage = () => {
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
      <div>
        <div className={styles.box}>
          <ArrowBack className={styles.backIcon} onClick={() => navigate("/")} fontSize="large" />

          <div
            className={styles.loginBox}
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
                style={{ borderTopRightRadius: "20px", marginTop: "30px" }}
              ></img>

              <div style={{ display: "flex", flexDirection: "column", padding: "15% 10%" }}>
                <div className="form-group">
                  <label htmlFor="username" style={{ color: "#6CE4F3" }}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter the Username"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                    }}
                    onChange={handleUsername}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="password" style={{ color: "#6CE4F3" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
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
                  Login
                </button>
                <p style={{ color: "#6CE4F3", marginTop: "2vh" }}>
                  New to JobNest?
                  <a href="" style={{ marginLeft: "5px", color: "#6CE4F3" }} onClick={() => navigate('/register')}>Register Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
