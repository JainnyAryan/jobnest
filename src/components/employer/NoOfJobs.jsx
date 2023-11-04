import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/NoOfJobs.css";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaWindowClose } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';




export default function NoOfJobs() {
  return (
    <div
      className="fullCard"
      style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}
    >
      <div className="jobCard1">
      <IconContext.Provider value={{ color: "", className: "global-class-name", size:"2em" }}>
          <div>
            <FaFileAlt />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>

          <h3 >254</h3>
          <p>Job Posted</p>
          </center>
        </div>
      </div>
      <div className="jobCard2">
      <IconContext.Provider value={{ color: "", className: "global-class-name", size:"2em" }}>
          <div>
            <FaUser />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>

        <h3>2545</h3>
        <p>Applicants</p>
          </center>
        </div>
        
      </div>
      <div className="jobCard1">
      <IconContext.Provider value={{ color: "", className: "global-class-name", size:"2em" }}>
          <div>
            <FaWindowClose />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>

        <h3>220</h3>
        <p>Jobs Closed</p>
          </center>
        </div>
        
      </div>
      <div className="jobCard2">
        {/* <FontAwesomeIcon icon="fa-solid fa-image" />         */}
        <IconContext.Provider value={{ color: "", className: "global-class-name", size:"2em" }}>
          <div>
            <IoIosCheckmarkCircle />
          </div>
        </IconContext.Provider>
        <div className="mt-2">
          <center>

        <h3>75%</h3>
        <p>Hired Success</p>
          </center>
        </div>
        
      </div>
    </div>
  );
}
