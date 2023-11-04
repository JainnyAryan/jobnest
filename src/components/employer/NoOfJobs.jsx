import React from 'react'
import "./styles/NoOfJobs.css"

export default function NoOfJobs() {
  return (
    <div className='fullCard' style={{display:"flex", width:"100%", justifyContent:'space-evenly'}}>
      <div class="jobCard1">

        <h3>254</h3>
        <p>Job Posted</p>
      </div>
      <div class="jobCard2">
      <h3>2545</h3>
        <p>Applicants</p>
      </div>
      <div class="jobCard1">
      <h3>220</h3>
        <p>Jobs Closed</p>
      </div>
      <div class="jobCard2">
        <i></i>
      <h3>75%</h3>
        <p>Hired Success</p>
      </div>
    </div>
  )
}
