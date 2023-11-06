import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
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
        <div
          style={{
            borderRadius: "20px",
            width: "70vw",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            background: "#f8f9fa",
            margin: "auto",
            boxShadow: "3px 3px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
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


            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontFamily: "Signika Negative, Arial, sans-serif",
                paddingBottom: "5%",
                height: "80vh",
                backgroundColor:"#232423",
                // background: "rgb(69,223,245)",
                // background: "-moz-linear-gradient(42deg, rgba(69,223,245,1) 10%, rgba(106,227,242,1) 52%, rgba(163,239,249,1) 85%, rgba(194,246,252,1) 96%)",
                // background: "-webkit-linear-gradient(42deg, rgba(69,223,245,1) 10%, rgba(106,227,242,1) 52%, rgba(163,239,249,1) 85%, rgba(194,246,252,1) 96%)",
                // background: "linear-gradient(42deg, rgba(69,223,245,1) 10%, rgba(106,227,242,1) 52%, rgba(163,239,249,1) 85%, rgba(194,246,252,1) 96%)",
                // boxShadow: "none",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px"
              }}
            >
              <img
                src="/LOGO_transparent.png"
                alt="LOGO-transparent"
                border="0"
                width={"100%"}
                style={{ borderTopRightRadius: "20px" }}
              ></img>

              <div style={{ display: "flex", flexDirection: "column", height: "65%", padding: "10%" }}>
                <div className="form-group">
                  <label htmlFor="username" style={{color:"#6CE4F3"}}>
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
                  <label htmlFor="password" style={{color:"#6CE4F3"}}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
