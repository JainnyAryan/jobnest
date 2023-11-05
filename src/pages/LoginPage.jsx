import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import Navbar from "../components/landing_page/Navbar";
import { useNavigate } from "react-router-dom";

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
    <body
      style={{
        backgroundImage:
          'url("/background1.jpg")',
        // filter: 'blur(8px)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        height: "100%",
      }}
    >
      <div>
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
              marginRight: "7%"
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
                // marginRight: "5%"
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
                  width={"100%"}
                ></img>
                {/* <h1 className="card-title text-center mb-2">
              <strong>Login To JobNest</strong>
            </h1> */}
                <h5 className="text-center" style={{ color: "grey " }}>
                  <strong>Login to JobNest</strong>
                </h5>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="form-group">
                    <label htmlFor="username">
                      <strong>Username</strong>
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter the Username"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid grey",
                      }}
                      onChange={handleUsername}
                    />
                  </div>

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
                  {/* <span><input type="checkbox" onChange={onCheck} checked={isEmployer} /> Signup as an Employer</span> */}
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
    </body>
  );
};

export default LoginPage;
