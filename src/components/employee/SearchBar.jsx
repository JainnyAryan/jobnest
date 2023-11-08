import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles/Searchbar.module.css"
import { Input, TextField } from '@mui/material';

export const SearchBar = (props) => {
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


  return (
    <div className={!isFocused ? `${styles.card}` : `${styles.card} ${styles.expanded}`} ref={divRef}>
      <input placeholder="Search for Jobs" type="text" className={styles.input} onChange={(event) => props.searchUpdates(event.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      <button type="submit" className={styles.button}>Search</button>
    </div >
  )
}

export default SearchBar
