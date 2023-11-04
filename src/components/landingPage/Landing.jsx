import React from 'react';
import "./styles/Landing.css";
import heroAnime from "../../assets/anims/heroAnimation.json";

import Lottie from "react-lottie";
import Navbar from "./Navbar";

function Landing(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: heroAnime,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
      <div>
        <Navbar/>
        <div id="containerr">
          <div id="text">
            <h2><strong>Find a Job With<br/>Your Interests and<br/>Abilities</strong></h2>
            <br/>
            <h5>Find jobs that match your interests with us. Jabang provides a place to find your jobs</h5>
            <br/>
            <button class="btn click">Get Started</button>
          </div>
          <div id="image" >
                  <Lottie 
                  options={defaultOptions}
                  height={600}
                  width={600}
                  isClickToPauseDisabled={true}
                  />
          </div>
        </div>
      </div>
    )
}

export default Landing;