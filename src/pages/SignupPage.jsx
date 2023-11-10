import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles/SignupPage.module.css";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import { useUser } from "../context/userContext";

const SignupPage = () => {
  const navigate = useNavigate();
  const userProvider = useUser();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmployer, setIsEmployer] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleIsEmployerChange = (event) => {
    setIsEmployer(event.target.checked);
    console.log(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      axios
        .post("http://localhost:3001/register", {
          name,
          username,
          email,
          password,
          isEmployer,
        })
        .then((result) => {
          localStorage.setItem("userData", JSON.stringify(result.data));
          userProvider.setUserData(result.data);
          navigate("/fill-employee-details", {
            state: { isUserApplication: true },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password Mismatched");
    }
  };

  // const onClick = () => {
  //   if (username === "employer") {
  //     navigate("/employer");
  //   } else if (username === "employee") {
  //     navigate("/employee");
  //   }
  // };

  return (
    <div
      style={{
        backgroundImage: 'url("/background1.jpg")',
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
        <ArrowBack
          className={styles.backIcon}
          onClick={() => navigate("/")}
          fontSize="large"
        />

        <div className={styles.registerBox}>
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
          <div className={styles.formBox}>
            <img
              src="/LOGO_transparent.png"
              alt="LOGO-transparent"
              border="0"
              width={"100%"}
              style={{
                borderTopRightRadius: "20px",
                marginTop: "30px",
                padding: "0 10%",
              }}
            ></img>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0 10%",
                overflow: "auto",
              }}
            >
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
                  onChange={handleName}
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
                  onChange={handleUsername}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email" style={{ color: "#6CE4F3" }}>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter the email"
                  className="form-control"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccdce1",
                    textAlign: "left",
                  }}
                  onChange={handleEmail}
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
                  onChange={handlePassword}
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
                  onChange={handleConfirmPassword}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="checkbox"
                  name="isEmployer"
                  checked={isEmployer}
                  onChange={handleIsEmployerChange}
                  className={styles.checkbox}
                />
                <label
                  htmlFor="isEmployer"
                  style={{ color: "#6CE4F3", marginLeft: "10px" }}
                >
                  I am an Employer
                </label>
              </div>
              <button
                className="btn mt-4"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#6CE4F3",
                  color: "#232423",
                }}
                onClick={handleSubmit}
              >
                Register
              </button>
              <p style={{ color: "#6CE4F3", marginTop: "2vh" }}>
                Already have an account?
                <a
                  href=""
                  style={{ marginLeft: "5px", color: "#6CE4F3" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
