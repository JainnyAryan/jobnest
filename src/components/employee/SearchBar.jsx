import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles/Searchbar.module.css"

export const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    if (!divRef.current) return;
    const handleScroll = (event) => {
      const rect = divRef.current.getBoundingClientRect();
      if (rect.top < 15) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  });

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
    <div className={!expanded ? styles.card : `${styles.card} ${styles.expanded}`} ref={divRef}>
      <input style={{ borderRadius: "30px", border: "1px solid grey", color: "black", height: "5vh" }} placeholder="Search for Jobs" type="text" />
      <select name="industry" id="" style={{ borderRadius: "30px", border: "1px solid grey", height: "5vh" }}>
        {industry.map((e) => {
          return <option value={e}>{e}</option>
        })}
      </select>
      <select name="location" id="" style={{ borderRadius: "30px", border: "1px solid grey", height: "5vh" }}>
        {locations.map((e) => {
          return <option value={e}>{e}</option>
        })}
      </select>
      <button style={{ color: "White", height: "5vh", backgroundColor: "#2062E2", borderRadius: "30px", border: "1px solid grey", padding: "10px" }} type="submit">Search</button>
    </div >
  )
}

export default SearchBar
