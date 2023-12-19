import React from "react";
import { Line } from "react-chartjs-2";
import StandardCard from "../common/StandardCard";
import styles from "./Line.module.scss";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReload } from "react-icons/tb";

const LineChart = ({ showButtons, title }) => {
  // Data for the line chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Number of Flights 1",
        data: [50, 100, 200, 300, 400, 500, 420, 480, 490, 470, 430, 500],
        borderColor: "#FF8660", // Change the line color for this dataset
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
      {
        label: "Number of Flights 2",
        data: [150, 220, 180, 320, 270, 380, 340, 400, 450, 410, 390, 480],
        borderColor: "#6C60FF", // Change the line color for this dataset
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      },
      {
        label: "Number of Flights 3",
        data: [200, 260, 320, 290, 380, 450, 470, 480, 490, 470, 430, 500],
        borderColor: "#106CC2", // Change the line color for this dataset
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
      {
        label: "Number of Flights 4",
        data: [280, 330, 400, 350, 430, 470, 490, 480, 460, 420, 470, 500],
        borderColor: "#04BF00", // Change the line color for this dataset
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
      {
        label: "Number of Flights 5",
        data: [300, 380, 410, 420, 480, 500, 490, 480, 450, 410, 390, 450],
        borderColor: "#CE2A96", // Change the line color for this dataset
        backgroundColor: "rgba(0, 255, 0, 0.2)",
      },
      // Add more datasets and set different borderColor values as needed
    ],
  };

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
          text: "Number of Flights",
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

  const years = [
    { year: 2019, bgColor: "#6C60FF" },
    { year: 2020, bgColor: "#CE2A96" },
    { year: 2021, bgColor: "#106CC2" },
    { year: 2022, bgColor: "#FF8660" },
    { year: 2023, bgColor: "#04BF00" },
  ];

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
