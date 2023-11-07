import React from 'react'
import Applicants from '../components/employer/Applicants'
import { Link } from 'react-router-dom'
import ApplicantsTab from '../components/employer/ApplicantsTab'

const AcceptRejectEmployerScreen = () => {
    const applicants =[
        {
            id: 1,
            name: "Shra",
            location:"mumbai",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 2,
            name: "Aryan",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 3,
            name: "Anjali",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 4,
            name: "Vaibhav",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 5,
            name: "Samarth",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 6,
            name: "priya",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 7,
            name: "vanshi",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 8,
            name: "disha",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 9,
            name: "aaku",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 10,
            name: "janvi",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 11,
            name: "Atharva",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },
        {
            id: 12,
            name: "Anuj",
            location:"delhi",
            date:"19 sept 2023",
            resume: "link"
        },

    ]



  return (
    <div style={{padding:"2vh"}}>
        <ApplicantsTab />
        <Applicants applicants={applicants} />
    </div>
  )
}

export default AcceptRejectEmployerScreen
