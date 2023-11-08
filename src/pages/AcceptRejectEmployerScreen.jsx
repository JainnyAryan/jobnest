import React from "react";
import Applicants from "../components/employer/Applicants";
import ApplicantsTab from "../components/employer/ApplicantsTab";
import { useState } from "react";

const applicants = [
  {
    id: 1,
    name: "Shra",
    location: "mumbai",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: true,
    isAcknowledged: false,
  },
  {
    id: 2,
    name: "Aryan",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 3,
    name: "Anjali",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 4,
    name: "Vaibhav",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 5,
    name: "Samarth",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: true,
    isAcknowledged: false,
  },
  {
    id: 6,
    name: "priya",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 7,
    name: "vanshi",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 8,
    name: "disha",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 9,
    name: "aaku",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: true,
    isAcknowledged: false,
  },
  {
    id: 10,
    name: "janvi",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
  {
    id: 11,
    name: "Atharva",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: true,
    isAcknowledged: false,
  },
  {
    id: 12,
    name: "Anuj",
    location: "delhi",
    date: "19 sept 2023",
    resume: "link",
    isAccepted: false,
    isAcknowledged: false,
  },
];



const AcceptRejectEmployerScreen = () => {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const updateApplicant = (applicant, index) => {
    applicants[index] = applicant;
  }



  return (
    <div style={{ padding: "2vh" }}>
      <ApplicantsTab onClick={(tabValue) => setSelectedTab(tabValue)} />
      <Applicants applicants={applicants} selectedTab={selectedTab} updateApplicant={(applicant, index) => updateApplicant(applicant, index)} />
    </div>
  );
};

export default AcceptRejectEmployerScreen;
