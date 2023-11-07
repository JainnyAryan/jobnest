import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isEmployer, setIsEmployer] = useState(false);
  const onCheck = (event) => {
    setIsEmployer(event.target.checked);
    console.log(event.target.checked);
  };

  const onClick = () => {
    if (isEmployer) {
      navigate("/employer");
    } else {
      navigate("/fill-employee-details");
    }
  };

  return (
    <body
      style={{
        backgroundImage:
          'url("/background1.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        height: "100%",
      }}
    >
      <img src="/backgound1.jpg" alt="" />
      <div>
        {/* <Navbar/> */}
        <div
          style={{
            borderRadius: "10px",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8f9fa",
            margin: "auto",
            boxShadow: "3px 3px 10px",
            marginTop: "3%",
            marginBottom: "10%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "3%"
            }}
          >
            <div>
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
              className="card"
              style={{
                width: "100%",
                borderRadius: "5px",
                margin: "4%",
                borderColor: "white",
                boxShadow: "1px 1px 30px #e9ecef",
              }}
            >
              <div
                className="card-body"
                style={{ fontFamily: "Signika Negative, Arial, sans-serif" }}
              >
                <img
                  src="/logo_black.png"
                  alt="LOGO-transparent"
                  border="0"
                  width={"60%"}
                  style={{ marginLeft: "20%" }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  {/* User enters his/her official name. */}
                  <div className="form-group mt-3">
                    <label htmlFor="name">
                      <strong>Name</strong>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                        alignItems: "start",
                      }}
                    />
                  </div>

                  {/* User enters his/her account name for jobnest platform. */}
                  <div className="form-group mt-3" style={{ color: "black" }}>
                    <label htmlFor="username">
                      <strong>Username</strong>
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your Username"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                      }}
                    />
                  </div>

                  {/* User enters his/her email address */}
                  <div className="form-group mt-3">
                    <label htmlFor="email">
                      <strong>Email</strong>
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your Email"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                      }}
                    />
                  </div>

                  {/* User enters his/her password for their account on jobnest. */}
                  <div className="form-group mt-3">
                    <label htmlFor="password">
                      <strong>Password</strong>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter the Password"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                        textAlign: "left",
                      }}
                    />
                  </div>

                  {/* User enters his/her confirmed password for their account on jobnest. */}
                  <div className="form-group mt-3">
                    <label htmlFor="password">
                      <strong>Confirm Password</strong>
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter the confirm Password"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                        textAlign: "left",
                      }}
                    />
                  </div>
                  <br />
                  {/* User registers either as an employer or a job seeker. */}
                  <span>
                    <input
                      type="checkbox"
                      onChange={onCheck}
                      checked={isEmployer}
                    />{" "}
                    Signup as an Employer
                  </span>
                  <button
                    className="btn btn-primary mt-4"
                    style={{ borderRadius: "10px" }}
                    onClick={onClick}
                  >
                    <strong>Login</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
