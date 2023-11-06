import React from 'react';
import Lottie from "react-lottie";
import styles from "./styles/LandingPage.module.css";
import Navbar from "../components/landing_page/Navbar";
import heroAnime from "../assets/anims/heroAnimation.json";

function LandingPage() {
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
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text}>
          <h2><strong>Find a Job With<br />Your Interests and<br />Abilities</strong></h2>
          <br />
          <h5>Find jobs that match your interests with us. Jabang provides a place to find your jobs</h5>
          <br />
          <button className="btn click">Get Started</button>
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

export default LandingPage;