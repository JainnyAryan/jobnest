import React from "react";
import styles from "./styles/FilterBox.module.css";


const FilterBox = (props) => {
  const filterData = [
    {
      category: "Location",
      filters: ["Choose", "Delhi", "Banglore", "Gurugram", "Hydrabad", "Mumbai", "Pune", "Calcutta", "Ahmedabad", "Chennai", "Noida"]
    },
    {
      category: "Location Type",
      filters: ["Choose Filter", "On Site", "Hybrid", "Work from Home"],
    },
  ]

  return (
    <>
      <div className={styles.box}>
        <span className={styles.boxTitle}><b>Filter</b></span>
        <div className={styles.filters}>
          {
            filterData.map((filter) => {
              return (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                  <span style={{ color: "grey", marginTop: "2.5vh", marginBottom: "1vh" }}>{filter.category}</span>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                    {
                      filter.category === "Location"
                        ?
                        <input name="location" placeholder="Filter Location" className={styles.locationFilter} onChange={(event) => props.locationFilterUpdates(event.target.value)} />
                        :
                        <select name="locationType" className={styles.locationTypeFilter} onChange={(event) => props.locationTypeFilterUpdates(event.target.value)}>
                          {filter.filters.map((e) => (
                            <option value={e == "Choose Filter" ? "" : e}> {e} </option >
                          ))}
                        </select>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default FilterBox;