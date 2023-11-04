import React from "react";
import { MdLocationPin } from "react-icons/md";

import styles from "./styles/JobList.module.css";


const JobsList = () => {
  let jobItems = [
    {
      jobName: "Junior Web Dev",
      company: "MS",
      location: "Cape Town",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "Senior Web Dev",
      company: "Netflix",
      location: "WFH",
      locationType: "Remote",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "Intern",
      company: "VIT",
      location: "Vellore",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
    {
      jobName: "CEO",
      company: "Netflix",
      location: "New York",
      locationType: "On-site",
      jobIcon: "/logo192.png",
    },
  ];

  return (
    <div className={styles.box}>
      {jobItems.map((e) => {
        return (
          <div style={{ display: "flex", marginTop: "10px", padding: "10px", paddingRight: "3vh", width: "100%", flexDirection: "row", alignItems: "center", border: "1px solid black", borderRadius: "20px" }}>
            <img src={e.jobIcon} style={{ height: "9vh", aspectRatio: "1/1", marginRight: "20px" }} />
            <div style={{ flex: 3, display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
              <div style={{ display: "flex", height: "10vh", flexDirection: "column", alignItems: "start", justifyContent: "space-evenly", width: "50%" }}>
                <p style={{ margin: "0px", color: "grey" }}>{e.jobName}</p>
                <p style={{ margin: "0px", color: "rgb(34,71,82)" }}>{e.company}</p>
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
      })}
    </div>
  )

}

export default JobsList;