import React from 'react';

const AppliedJobs = (props) => {
  const jobItems = props.jobItems;

  return (
    <ul style={listStyle}>
      {jobItems.map((e, index) => (
        <li key={index} style={cardStyle}>
          <div style={containerStyle}>
            <h3>{e.jobName}</h3>
            <h4>{e.salary}</h4>
          </div>
          <div style={containerStyle}>
            <h6>{e.company}</h6>
            <p>{e.location}</p>
          </div>
          <div style={containerStyle}>
            <p>{e.description}</p>
            <h5>{e.locationType}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  backgroundColor: "rgb(246, 248, 247)"
};

const cardStyle = {
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: "#F7F8F7",
  overflow: "hidden",
  transition: "box-shadow 0.3s",
  cursor: "pointer",
  margin: "10px",
  width: "60vw",
  ':hover': {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  }
};

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "2px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
  };
  
export default AppliedJobs;
