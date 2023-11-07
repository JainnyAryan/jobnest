import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles/Searchbar.module.css"
import { Input, TextField } from '@mui/material';

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef();
  // useEffect(() => {
  //   // if (!divRef.current) return;
  //   const handleScroll = () => {
  //     // const rect = divRef.current.getBoundingClientRect();
  //     if (window.scrollY > 0.000000000000) {
  //       setExpanded(true);
  //     } else {
  //       setExpanded(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  // });

  const locations = ["Location", "Delhi", "Banglore", "Gurugram", "Hydrabad", "Mumbai", "Pune", "Calcutta", "Ahmedabad", "Chennai", "Noida", "Lucknow", "Srinagar", "Lahore", "Gaziabad", "Nagpur", "Nanded", "Aurangabad", "Raipur"];
  const industry = ["Industry", "Textile", "Pharmaceutical", "Real Estate", "Financial services", "IT", "Computer", "Iron and steel", "Aviation", "Civil", "Electronics",
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


  return (
    <div className={!isFocused ? `${styles.card}` : `${styles.card} ${styles.expanded}`} ref={divRef}>
      <input placeholder="Search for Jobs" type="text" className={styles.input} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      {/* <select name="industry">
        {industry.map((e) => {
          if(e === "Industry"){
            return (
              <option value="" disabled selected hidden>{e}</option>
              )
            }
            else{
              return(
              <option value={e}>{e}</option>
            )
          }
        })}
      </select>
      <select name="location" placeholder='Location'>
        {locations.map((e) => {
          if(e === "Location"){
            return (
              <option value="" disabled selected hidden>{e}</option>
              )
            }
            else{
              return(
              <option value={e}>{e}</option>
            )
          }
        }
        )}
      </select> */}
      <button type="submit" className={styles.button}>Search</button>
    </div >
  )
}

export default SearchBar
