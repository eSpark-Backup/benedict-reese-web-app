import React, { useEffect, useRef, useState } from "react";

import { Button, ListSubheader, Menu, MenuItem } from "@mui/material";

import StandardCard from "../common/StandardCard";

import { FaFilter } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReload } from "react-icons/tb";

import { Line } from "react-chartjs-2";

import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import styles from "./Line.module.scss";

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({
  showButtons,
  title,
  years,
  data,
  sideText,
  showYears,
  chartWidth,
  chartHeight,
  showTitle,
  graphText,
  showButton1,
  showButton2,
  showButton3,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const lineChartRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    // Handle actions upon selecting a dropdown menu item
    console.log("Selected:", value);
    handleClose();
  };

  const footer = (tooltipItems) => {
    if (!tooltipItems || tooltipItems.length === 0) {
      return "";
    }

    const monthIndex = tooltipItems[0].dataIndex;
    let footerText = "";

    if (data.datasets) {
      footerText = years
        .map((year, index) => {
          const value = data.datasets[index].data[monthIndex];
          return `${year.year}: ${value}`;
        })
        .join("\n");
    }

    return footerText;
  };

  const lines = {
    id: "lines",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        tooltip,
        chartArea: { top, bottom },
      } = chart;

      if (tooltip?._active[0]) {
        ctx.beginPath();
        ctx.strokeStyle = "#676767";
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 4]);
        ctx.moveTo(tooltip?._active[0]?.element?.x, top);
        ctx.lineTo(tooltip?._active[0]?.element?.x, bottom);
        ctx.stroke();
        ctx.restore();
        ctx.setLineDash([6, 0]);
      }
    },
  };

  const titleTooltip = () => {
    return "";
  };

  const labelTooltip = () => {
    return "";
  };

  useEffect(() => {
    const chart = lineChartRef.current;

    if (chart) {
      Tooltip.positioners.top = (_, eventPosition) => {
        if (lineChartRef?.current) {
          const {
            chartArea: { top },
            scales: { x },
          } = lineChartRef?.current;

          return {
            x: x.getPixelForValue(x.getValueForPixel(eventPosition.x)),
            y: top,
          };
        }
      };
    }
  }, [lineChartRef]);

  // Options for the line chart
  const options = {
    interaction: {
      intersect: false,
      mode: "index",
    },
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
      tooltip: {
        position: "top",
        intersect: false,
        mode: "index",
        enabled: true,
        displayColors: false,
        yAlign: "bottom",
        backgroundColor: "#F4F4F6",
        footerColor: "black",
        footerFont: {
          weight: "normal",
          family: "Poppins",
        },
        callbacks: {
          footer: footer,
          title: titleTooltip,
          label: labelTooltip,
        },
      },
      // Customizing the chart background to be plain white
      backgroundColor: "white",
    },
  };

  return (
    <StandardCard className={"h-full"} style={{ padding: "20px" }}>
      <div className="block md:flex justify-between md:mb-0 mb-12">
        {showTitle && (
          <h2 className={`${styles.lineHeading} md:mb-[50px]`}>{title}</h2>
        )}
        <div className="block md:flex justify-between">
          {showButton1 && (
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
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <TbReload className={styles.TbReload} />
              Past 30 Days
            </Button>
          )}
          {showButton2 && (
            <div>
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                  width: "160px",
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
                  "&:hover": {
                    backgroundColor: "#FFF",
                  },
                }}
              >
                <BsGraphUpArrow className={styles.filterButton} />
                {graphText}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "160px", // Adjust the width according to your preference
                  },
                }}
              >
                <ListSubheader
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19px",
                    color: "#959595 !important",
                    textAlign:"center"
                  }}
                >
                  Missions
                </ListSubheader>
                <MenuItem onClick={() => handleMenuItemClick("Hours")}>
                  Hours
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Distance")}>
                  Distance
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Calendar")}>
                  Calendar
                </MenuItem>
              </Menu>
            </div>
          )}
          {showButton3 && (
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
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <FaFilter className={styles.filterButton} />
              Filter
            </Button>
          )}
        </div>
      </div>
      <div style={{ width: chartWidth, height: chartHeight }}>
        <Line
          data={data}
          options={options}
          ref={lineChartRef}
          plugins={[lines]}
        />
      </div>
      {showYears && (
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
      )}
    </StandardCard>
  );
};

export default LineChart;
