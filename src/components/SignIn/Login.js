import React from 'react';
import Nav from "./Nav";
import { BrowserRouter,HashRouter,Route,Routes,Switch, Link} from "react-router-dom";
import loginAnim from "../../assets/anims/loginAnim.json";
import Lottie from "react-lottie";

function Login() {
 
  const imageStyles = {
    width: "auto",      
    height: "65vh",      
    borderRadius: "30px",
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  

  return (
    
<div style={{border:"1px solid grey", borderRadius:"20px", width:"70%"}}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
       
          <div>
                  <Lottie 
                  options={defaultOptions}
                  isClickToPauseDisabled={true}
                  style={{padding:"0px", margin:"0px", height:"40vw", width:"40vw"}}
                  /></div>
         

      <div className="card" style={{ width: "30%", border: "none" }}>
        <div className="card-body" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          <h1 className="card-title text-center mb-2"><strong>Login To JobNest</strong></h1>
          <h6 className="text-center" style={{ color: "gray" }}>Now you can apply for your dream job here in JobNest</h6>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input type="text" id="username" placeholder="Enter UserName" className="form-control" style={{ borderRadius: "10px" }} />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter Email" className="form-control" style={{ borderRadius: "10px" }} />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input type="password" id="password"  placeholder="Enter Password"className="form-control" style={{ borderRadius: "10px" }} />
            </div>

            <button className="btn btn-primary mt-4" style={{ borderRadius: "10px" }}>Login</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
