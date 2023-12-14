import React from "react";
import styles from "./Bar.module.scss";
import StandardCard from "../common/StandardCard";

const ProgressBar = ({ progress, text, backgroundColor }) => {
  const extraGapBars = ["150", "200"]; 
  const fillStyles = {
    height: `${progress}%`,
    width: "25px",
    backgroundColor: backgroundColor || "#007bff", // Default color or specified color
    position: "absolute",
    bottom: "0",
    transition: "height 0.3s ease-in-out",
    borderRadius: "12px 12px 0px 0px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: extraGapBars.includes(text) ? "20px" : "0px",
    
  };

  return (
    <div className={styles.barStyles}>
      <div style={fillStyles}>
        <div className={styles.progressBarText}>{text}</div>
      </div>
    </div>
  );
};

const VerticalProgressBars = () => {
  const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"];

  const labels = [
    { label: "Fleet Average Movements", color: "#5DC5C2" },
    { label: "Fleet Average Hours", color: "#5247C6" },
    { label: "N898TS Total Movements", color: "#8DE6E6" },
    { label: "N898TS Total Hours", color: "#867DF4" },
  ];

  // Update progressBarsData to include progress, text, and background color for each bar
  const progressBarsData = [
    [
      { progress: 195, text: "2,564", backgroundColor: "#5DC5C2" },
      { progress: 245, text: "3,001", backgroundColor: "#5247C6" },
      { progress: 90, text: "150", backgroundColor: "#8DE6E6" },
      { progress: 135, text: "200", backgroundColor: "#867DF4" },
    ],
    [
      { progress: 170, text: "2,564", backgroundColor: "#5DC5C2" },
      { progress: 120, text: "3,001", backgroundColor: "#5247C6" },
      { progress: 70, text: "150", backgroundColor: "#8DE6E6" },
      { progress: 100, text: "200", backgroundColor: "#867DF4" },
    ],
    [
      { progress: 170, text: "2,564", backgroundColor: "#5DC5C2" },
      { progress: 220, text: "3,001", backgroundColor: "#5247C6" },
      { progress: 70, text: "150", backgroundColor: "#8DE6E6" },
      { progress: 100, text: "200", backgroundColor: "#867DF4" },
    ],
    [
      { progress: 170, text: "2,564", backgroundColor: "#5DC5C2" },
      { progress: 220, text: "3,001", backgroundColor: "#5247C6" },
      { progress: 70, text: "150", backgroundColor: "#8DE6E6" },
      { progress: 100, text: "200", backgroundColor: "#867DF4" },
    ],
    [
      { progress: 170, text: "2,564", backgroundColor: "#5DC5C2" },
      { progress: 220, text: "3,001", backgroundColor: "#5247C6" },
      { progress: 70, text: "150", backgroundColor: "#8DE6E6" },
      { progress: 100, text: "200", backgroundColor: "#867DF4" },
    ],
    // Include data for other months as needed
    // ...
  ];

  const LabelBox = ({ label, color }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        marginRight: "20px", // Add margin between label boxes
        whiteSpace: "nowrap", // Prevent labels from wrapping automatically
      }}
    >
      <div
        style={{
          width: "23px",
          height: "14px",
          backgroundColor: color,
          marginRight: "5px",
        }}
      ></div>
      <span>{label}</span>
    </div>
  );

  const labelsCount = labels.length;
  const halfLabelsCount = Math.ceil(labelsCount / 2);
  const firstRowLabels = labels.slice(0, halfLabelsCount);
  const secondRowLabels = labels.slice(halfLabelsCount);

  return (
    <StandardCard
      style={{ width: "1070px", height: "710px", marginBottom: "20px" }}
    >
      <div className={styles.barsHeading}>
        <h1>Flight Activity</h1>
        <h2>Number of Flights</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        {months.map((month, index) => (
          <div key={index} style={{ textAlign: "center", margin: "0 40px" }}>
            {progressBarsData[index].map((barData, barIndex) => (
              <ProgressBar
                key={barIndex}
                progress={barData.progress}
                text={barData.text}
                backgroundColor={barData.backgroundColor}
              />
            ))}
            <div>{month}</div>
          </div>
        ))}
      </div>
      <div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", // Allow flex items to wrap
          }}
        >
          {/* Render labels with colored boxes for the first row */}
          {firstRowLabels.map((label, index) => (
            <LabelBox key={index} label={label.label} color={label.color} />
          ))}
        </div>
        <div
          style={{
            marginTop: "10px", // Adjust margin between rows if needed
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap", // Allow flex items to wrap
          }}
        >
          {/* Render labels with colored boxes for the second row */}
          {secondRowLabels.map((label, index) => (
            <LabelBox key={index} label={label.label} color={label.color} />
          ))}
        </div>
      </div>
    </StandardCard>
  );
};

export default VerticalProgressBars;
