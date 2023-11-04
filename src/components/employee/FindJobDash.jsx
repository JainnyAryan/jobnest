import { useState } from "react";
import styles from "./styles/findJobDash.module.css";
import React from 'react';

export function FindJobDash() {

    return (
        <div className={styles.box}>
            <div className={styles.dash}>
                <center>
                    <h1>Jobs for Unemployed Youth <br />No Experience? No Problem</h1>
                    <p>Empowering Youth through No Experience Job Opportunities</p>
                    <button className={styles.findJobButton}>Find a Job</button>
                </center>
            </div>


        </div>
    )
}