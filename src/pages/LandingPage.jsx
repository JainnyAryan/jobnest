import React from 'react';
import Lottie from "react-lottie";
import styles from "./styles/LandingPage.module.css";
import heroAnime from "../assets/anims/heroAnimation.json";
import MyFooter from '../components/common/MyFooter';
import MyNavbar from '../components/landing_page/MyNavbar';

function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroAnime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: `${styles.lottie}`
    }
  };
  return (
    <div>
      <MyNavbar />
      <div className={styles.containerr}>
        <div className={styles.text}>
          <h2><strong>Find a Job With<br />Your Interests and<br />Abilities</strong></h2>
          <br />
          <h5>Find jobs that match your interests with us. Jabang provides a place to find your jobs</h5>
          <br />
          <button className={`${styles.click} btn`}>Get Started</button>
        </div>
        <div id="image" >
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
      <MyFooter />
    </div>
  )
}

export default LandingPage;