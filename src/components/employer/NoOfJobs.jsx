import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles/NoOfJobs.module.css";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaWindowClose } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const colorPalette = {
  primary: "#18DCD9",
  secondary: "#FFB8AD",
  background: "#151316",
  accent1: "#4A434C",
  accent2: "#4A434C",
};

export default function NoOfJobs() {
  return (
    <div
      className={styles.fullCard}
      style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}
    >
      <div className={styles.jobCard1} style={{ backgroundColor: colorPalette.primary }}>
        <IconContext.Provider value={{ color: colorPalette.background, className: "global-class-name", size: "2em" }}>
          <div>
            <FaFileAlt />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>
            <h3 style={{ color: colorPalette.background }}>254</h3>
            <p style={{ color: colorPalette.background }}>Job Posted</p>
          </center>
        </div>
      </div>
      <div className={styles.jobCard2} style={{ backgroundColor: colorPalette.secondary }}>
        <IconContext.Provider value={{ color: colorPalette.background, className: "global-class-name", size: "2em" }}>
          <div>
            <FaUser />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>
            <h3 style={{ color: colorPalette.background }}>2545</h3>
            <p style={{ color: colorPalette.background }}>Applicants</p>
          </center>
        </div>
      </div>
      <div className={styles.jobCard1} style={{ backgroundColor: colorPalette.primary }}>
        <IconContext.Provider value={{ color: colorPalette.background, className: "global-class-name", size: "2em" }}>
          <div>
            <FaWindowClose />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>
            <h3 style={{ color: colorPalette.background }}>220</h3>
            <p style={{ color: colorPalette.background }}>Jobs Closed</p>
          </center>
        </div>
      </div>
      <div className={styles.jobCard2} style={{ backgroundColor: colorPalette.secondary }}>
        <IconContext.Provider value={{ color: colorPalette.background, className: "global-class-name", size: "2em" }}>
          <div>
            <IoIosCheckmarkCircle />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>
            <h3 style={{ color: colorPalette.background }}>75%</h3>
            <p style={{ color: colorPalette.background }}>Hired Success</p>
          </center>
        </div>
      </div>
    </div>
  );
}
