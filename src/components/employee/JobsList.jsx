import React from "react";
import { MdLocationPin } from "react-icons/md";

import styles from "./styles/JobList.module.css";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { CircularProgress } from "@mui/material";

const JobsList = (props) => {
  const jobItems = props.jobItems;

  return (
    <div className={styles.box}>
      {jobItems ? jobItems.map((e) => {
        return (
          <div onClick={() => props.onClick(e)} className={e != props.selectedJob ? `${styles.jobTile}` : `${styles.jobTile} ${styles.selected}`}>
            <img src={e.iconUrl} style={{ height: "10vh", objectFit: "contain", aspectRatio: "1/1", marginRight: "20px" }} />
            <div style={{ flex: 3, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div style={{ display: "flex", height: "10vh", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly", width: "50%" }}>
                <p style={{ margin: "0px", color: "grey" }}>{e.role}</p>
                <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>{e.orgName}</p>
              </div>
              <div style={{ display: "flex", height: "10vh", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly" }}>
                <span>
                  <MdLocationPin color="grey" />
                  <span style={{ color: "grey" }}>Location</span>
                </span>
                <p style={{ margin: "0px" }}>{e.location}</p>
              </div>
            </div>
          </div>
        )
      }) : <CircularProgress />}
    </div>
  )

}

export default JobsList;