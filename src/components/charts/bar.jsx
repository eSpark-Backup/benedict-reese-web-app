import React from "react";
import styles from "./Bar.module.scss";
import StandardCard from "../common/StandardCard";
import { Button } from "@mui/material";
import { BsGraphUpArrow } from "react-icons/bs";

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
  const months = ["July", "August", "September", "October", "November"];

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
    <StandardCard className="w-full mx-auto mb-8 lg:mb-16 ">
      <div className="flex justify-between">
      <div className={styles.barsHeading}>
        <h1>Flight Activity</h1>
        <h2>Number of Flights</h2>
      </div>
      <Button
            variant="contained"
            sx={{
              width: "165px",
              height: "38px",
              borderRadius: "12px",
              border: "1px solid #EBECF2",
              background: "#FFF",
              boxShadow: "0px 21px 19.7px -9px rgba(0, 0, 0, 0.05)",
              color: "#000",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "35px",
              marginRight: "30px",
            }}
          >
            <BsGraphUpArrow className={styles.filterButton} />
            Graph Type
          </Button>
      </div>
      <div className="flex flex-wrap items-end justify-center mt-12 lg:mt-20">
        {months.map((month, index) => (
          <div
            key={index}
            className="text-center lg:mx-8 xl:mx-16 mb-10 lg:mb-0"
          >
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
      <div className="mt-8 lg:mt-12 flex flex-wrap justify-center">
        {firstRowLabels.map((label, index) => (
          <LabelBox key={index} label={label.label} color={label.color} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center">
        {secondRowLabels.map((label, index) => (
          <LabelBox key={index} label={label.label} color={label.color} />
        ))}
      </div>
    </StandardCard>
  );
};

export default VerticalProgressBars;
