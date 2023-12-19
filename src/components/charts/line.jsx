import React from "react";
import { Line } from "react-chartjs-2";
import StandardCard from "../common/StandardCard";
import styles from "./Line.module.scss";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReload } from "react-icons/tb";

const LineChart = ({ showButtons, title, years, data, sideText}) => {
  // Data for the line chart
 

  // Options for the line chart
  const options = {
    scales: {
      y: {
        suggestedMin: 50,
        suggestedMax: 500,
        grid: {
          display: false, // Hide Y-axis grid lines
        },
        title: {
          display: true,
          text: sideText,
          color: "black",
          font: {
            size: 14,
            
          },
          align: "center",
          padding: { top: 20, bottom: 20 },
          lineHeight: 1.2,
          minRotation: 90, // Rotate the y-axis label by 90 degrees
        },
        ticks: {
          color: "black", // Change the color of x-axis (month lines)
        },
      },
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
        ticks: {
          color: "black", // Change the color of x-axis (month lines)
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend labels
      },
      // Customizing the chart background to be plain white
      backgroundColor: "white",
    },
  };

  

  return (
    <StandardCard style={{ padding: "40px" }}>
      <div className="block md:flex justify-between md:mb-0 mb-12">
        <h2 className={`${styles.lineHeading} md:mb-[50px]`}>{title}</h2>
        {showButtons && (
          <div className="block md:flex justify-between">
            <Button
              variant="contained"
              sx={{
                width: "112px",
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
              <FaFilter className={styles.filterButton} />
              Filter
            </Button>
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
              <TbReload className={styles.filterButton} />
              Past 30 Days
            </Button>
          </div>
        )}
      </div>
      <Line data={data} options={options} />
      <div className={styles.yearRectangles}>
        {years.map((item, index) => (
          <div key={index} className={styles.yearBox}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: item.bgColor }}
            ></div>
            <div className={styles.year}>{item.year}</div>
          </div>
        ))}
      </div>
    </StandardCard>
  );
};

export default LineChart;
