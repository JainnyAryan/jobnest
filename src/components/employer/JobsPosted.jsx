import React from 'react'
import "./JobsPosted.css"

export default function JobsPosted() {

    const jobs = [
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        },
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        },
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        },
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        },
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        },
        {
            role:"Web Developer",
            time:"Full Time",
            location:"Germany",
            type:"Remote",
            salary:"20000",
        }
]

  return (
    <center>

    <div style={{display:"grid", flexDirection:"row",  gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {jobs.map((e)=>{
            return(
                <div class="jobPosted">
                    <h3>{e.role}</h3>
                    <center>

                    <div style={{display: "flex", justifyContent:"center"}}>
                        <div>{e.location}</div>
                        <div>{e.salary}</div>
                    </div>
                    </center>

                    
                    <div style={{display: "flex", justifyContent:"center"}}>
                        <div>{e.time}</div>
                        <div>{e.type}</div>
                    </div>
                </div>
            )
        })}
    </div>
    </center>
  )
}
