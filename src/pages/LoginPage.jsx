import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import Navbar from "../components/landing_page/Navbar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');


  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  const onClick = () => {
    if (username === "employer") {
      navigate("/employer");
    }
    else if (username === "employee") {
      navigate("/employee");
    }
  }

  return (
    <div>
      <div
        style={{ borderRadius: "20px", width: "100%" }}
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
                cursor: "default"
              }}
            />
          </div>

          <div className="card" style={{ width: "25%", borderRadius: "20px", background: "rgb(6, 58, 66)", color: "white" }}>
            <div
              className="card-body"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <img src="https://i.ibb.co/C1TNMMY/LOGO-transparent.png" alt="LOGO-transparent" border="0" width={"100%"}></img>
              {/* <h1 className="card-title text-center mb-2">
              <strong>Login To JobNest</strong>
            </h1> */}
              <h4 className="text-center" style={{ color: "white " }}>
                <strong>Welcome back to JobNest</strong>
              </h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="form-group">
                  <label htmlFor="username"><strong>Username</strong></label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter the Username"
                    className="form-control"
                    style={{ borderRadius: "8px", border: "1px solid grey", background: "#caf0f8" }}
                    onChange={handleUsername}
                  />
                </div>


                <div className="form-group mt-3">
                  <label htmlFor="password"><strong>Password</strong></label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter the Password"
                    className="form-control"
                    style={{ borderRadius: "8px", border: "1px solid grey", background: "#caf0f8", textAlign: "left" }}
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
  );
}

export default LoginPage;