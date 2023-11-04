import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import Navbar from "../components/landing_page/Navbar";
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
      navigate("/employee");
    }
  };

  return (
    <div >
        <Navbar/>
    <div
      style={{ borderRadius: "20px", width: "80%", justifyContent: "center", alignContent: "center" }}
      >
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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

        <div className="card" style={{ width: "25%", borderRadius: "20px" , background: "rgb(6, 58, 66)" , color: "white"}}>
          <div
            className="card-body"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
            <img
              src="https://i.ibb.co/C1TNMMY/LOGO-transparent.png"
              alt="LOGO-transparent"
              border="0"
              width={"100%"}
              ></img>
            {/* <h1 className="card-title text-center mb-2">
              <strong>Login To JobNest</strong>
            </h1> */}
            <h5 className="text-center" style={{ color: "white" }}>
              <strong>Welcome to JobNest</strong>
            </h5>
            <div style={{ display: "flex", flexDirection: "column" }}>

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
                      border: "1px solid grey",
                      background: "#caf0f8",
                    }}
                    />
              </div>

                {/* User enters his/her account name for jobnest platform. */}
              <div className="form-group mt-3" style={{ color: "white"}}>
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
                    border: "1px solid grey",
                    background: "#caf0f8",
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
                      border: "1px solid grey",
                      background: "#caf0f8",
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
                      border: "1px solid grey",
                      background: "#caf0f8",
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
                      border: "1px solid grey",
                      background: "#caf0f8",
                      textAlign: "left",
                    }}
                    />
              </div>
              <br/>
              {/* User registers either as an employer or a job seeker. */}
              <span>
                <input
                  type="checkbox"
                  onChange={onCheck}
                  checked={isEmployer}
                  />{" "}
                <strong>Signup as an Employer</strong>
              </span>
              <button
                className="btn btn-primary mt-4"
                style={{ borderRadius: "10px" }}
                onClick={onClick}
                >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
