import { useState } from "react";
import "./findJobDash.css";
import Card from 'react-bootstrap/Card';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {  Col, Container, Row } from "react-bootstrap";
// import 'mdb-react-ui-kit/css/mdb.min.css'; // Import MDB CSS
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export function FindJobDash(){

    const locations=["Location", "Delhi", "Banglore", "Gurugram", "Hydrabad", "Mumbai", "Pune", "Calcutta", "Ahmedabad", "Chennai", "Noida", "Lucknow", "Srinagar", "Lahore", "Gaziabad", "Nagpur", "Nanded", "Aurangabad", "Raipur"];
    const industry = ["Industry","Textile", "Pharmaceutical", "Real Estate", "Financial services", "IT", "Computer", "Iron and steel", "Aviation", "Civil", "Electronics",
    "Auto Components",
    "Automobiles",
    "Aviation",
    "Banking",
    "Biotechnology",
    "Cement",
    "Chemicals",
    "Consumer Durables",
    "Defence Manufacturing",
    "E-Commerce",
    "Education and Training",
    "Financial Services",
    "FMCG",
    "Gems and Jewellery",
    "Healthcare",
    "Infrastructure",
    "Insurance",
    "Manufacturing",
    "Media and Entertainment",
    "Medical Devices",
    "Oil and Gas",
    "Pharmaceuticals",
    "Railways",
    "Telecommunications"
];
    return(
        <div id="dash">
            <div id="firstText">
                <div>
                <center>
                <h1>Jobs for Unemployed Youth <br />No Experience? No Problem</h1>
                <p>Empowering Youth through No Experience Job Opportunities</p>
                <button id="findJobButton">Find a Job</button>
                    </center>
               
                </div>
                <center>
                
                <div id="card">
                            <input style={{ borderRadius:"30px", border:"1px solid grey", color:"black"}} placeholder="Search for Jobs" type="text"/>
                            <select name="industry" id="" style={{borderRadius:"30px", border:"1px solid grey"}}>
                                {industry.map((e)=>{
                                    return <option value={e}>{e}</option>
                                })}
                            </select>
                            <select name="location" id="" style={{borderRadius:"30px", border:"1px solid grey"}}>
                                {locations.map((e)=>{
                                    return <option  value={e}>{e}</option>
                                })}
                            </select>
                            <button style={{color:"White", backgroundColor:"#2062E2", borderRadius:"30px", border:"1px solid grey", padding:"10px"}} type="submit">Search</button>
                </div>
                </center>
            </div>

        </div>
    )
}