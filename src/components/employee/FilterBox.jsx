import React from "react";
import styles from "./styles/FilterBox.module.css";


const FilterBox = () => {
  const filterData = [
    {
      category: "Location",
      filters: ["Choose", "Delhi", "Banglore", "Gurugram", "Hydrabad", "Mumbai", "Pune", "Calcutta", "Ahmedabad", "Chennai", "Noida"]
    },
    {
      category: "Employment",
      filters: ["Full-time", "Remote"],
    },
    {
      category: "Special Skills",
      filters: ["React", "Angular"]
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
                        <select name="location" className={styles.dropdown}>
                          {filter.filters.map((e) => {
                            return <option value={e}>{e}</option>
                          })}
                        </select>
                        :
                        (filter.filters.map((e) => (
                          <span style={{ padding: "0.7vh 0vh" }}>
                            <input type="checkbox" style={{ marginRight: "5px" }} name={filter.category} value={e} />
                            {e}
                          </span>
                        )))
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