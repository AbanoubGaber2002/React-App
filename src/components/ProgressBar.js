import React from "react";

const ProgressBar = ({ percentage }) => {
  const progressStyle = {
    width: `${percentage}%`,
    backgroundColor: "#f15a24",
    height: "10px",
    borderRadius: "5px",
  };

  return <div className="progress-bar" style={progressStyle}></div>;
};

export default ProgressBar;
