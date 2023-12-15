import React, { useEffect, useRef, useState } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import ZoomPlugin from "chartjs-plugin-zoom";

import { Button, Typography } from "@mui/material";

import Calendar from "../../assets/calendar.png";
import Switch from "../../assets/switch.png";

import "./ActivityByType.scss";
import StandardCard from "../common/StandardCard";

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ZoomPlugin
);

const ActivityByType = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hardcoded random values for each category for every month
  const monthlyData = [
    [1450, 1800, 1600, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850, 1650], // VLJ
    [1300, 1550, 1700, 1800, 1450, 2000, 1600, 1850, 1400, 1700, 1900, 1750], // Light
    [1500, 1700, 1800, 1600, 1750, 1850, 1650, 1400, 1900, 2000, 1500, 1700], // Medium
    [1600, 1400, 1850, 1700, 1600, 1750, 1800, 1500, 1700, 1600, 1550, 1900], // Large
    [1800, 1600, 1500, 1750, 1900, 1700, 1550, 2000, 1800, 1650, 1400, 1700], // VIP Airliner
  ];

  // const start = [
  //   "rgba(82, 71, 198, 1)",
  //   "rgba(134, 125, 244, 1)",
  //   "rgba(93, 148, 247, 1)",
  //   "rgba(93, 197, 194, 1)",
  //   "rgba(141, 230, 230, 1)",
  // ];

  // const end = [
  //   "rgba(82, 71, 198, 0.2)",
  //   "rgba(134, 125, 244, 0.2)",
  //   "rgba(93, 148, 247, 0.2)",
  //   "rgba(93, 197, 194, 0.2)",
  //   "rgba(141, 230, 230, 0.2)",
  // ];

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "VLJ",
        backgroundColor: "rgba(82, 71, 198, 1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
        borderSkipped: false,
        data: [
          1450, 1800, 1600, 1400, 2000, 1800, 1900, 1700, 1500, 1750, 1850,
          1650,
        ],
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
      {
        label: "Light",
        backgroundColor: "rgba(134, 125, 244, 1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
        borderSkipped: false,
        data: [
          1300, 1550, 1700, 1800, 1450, 2000, 1600, 1850, 1400, 1700, 1900,
          1750,
        ],
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
      {
        label: "Medium",
        backgroundColor: "rgba(93, 148, 247, 1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
        borderSkipped: false,
        data: [
          1500, 1700, 1800, 1600, 1750, 1850, 1650, 1400, 1900, 2000, 1500,
          1700,
        ],
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
      {
        label: "Large",
        backgroundColor: "rgba(93, 197, 194, 1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
        borderSkipped: false,
        data: [
          1600, 1400, 1850, 1700, 1600, 1750, 1800, 1500, 1700, 1600, 1550,
          1900,
        ],
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
      {
        label: "VIP Airliner",
        backgroundColor: "rgba(141, 230, 230, 1)",
        borderColor: "transparent",
        borderWidth: 2,
        borderRadius: {
          topLeft: 12,
          topRight: 12,
          bottomLeft: 12,
          bottomRight: 12,
        },
        borderSkipped: false,
        data: [
          1800, 1600, 1500, 1750, 1900, 1700, 1550, 2000, 1800, 1650, 1400,
          1700,
        ],
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        padding: 0,
        offset: 0,
        color: "#000000",
        anchor: "end",
        align: "end",
        font: {
          weight: "normal",
          family: "poppins",
        },
        formatter: (value, context) => {
          // Display the total above the last dataset in the stack
          if (context.datasetIndex === context.chart.data.datasets.length - 1) {
            const total = monthlyData.reduce(
              (acc, dataset) => acc + dataset[context.dataIndex],
              0
            );
            return total;
          }
          return "";
        },
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 37,
          color: "#000000",
          font: {
            size: 16,
            family: "poppins",
            weight: "normal",
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 4,
        color: "#fff",
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#000000",
          font: {
            size: 22,
            family: "poppins",
            weight: "normal",
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        display: false, // Hide the y-axis
        grid: {
          display: false,
        },
      },
    },

    tooltips: {
      enabled: false, // Disable default tooltips to avoid overlap with datalabels
      custom: (tooltip) => {
        // Custom tooltip to display the total above each stacked bar
        if (tooltip.body && tooltip.body.length > 0) {
          const total = tooltip.body[0].lines[0];
          const tooltipElement = document.getElementById("custom-tooltip");
          if (tooltipElement) {
            tooltipElement.innerHTML = total;
            tooltipElement.style.visibility = "visible";
            tooltipElement.style.left = tooltip.caretX + "px";
            tooltipElement.style.top = tooltip.caretY + "px";
          }
        }
      },
    },
  };

  const chartRef = useRef();

  function scrollWheel(Wheel, chart) {
    const { scales } = chart.config.options;

    if (Wheel.deltaY > 0) {
      if (scales.x.max >= data.labels.length) {
        scales.x.min = data.labels.length - 5;
        scales.x.max = data.labels.length;
      } else {
        scales.x.min += 1;
        scales.x.max += 1;
      }
    }

    if (Wheel.deltaY < 0) {
      if (scales.x.min <= 0) {
        scales.x.min = 0;
        scales.x.max = 4;
      } else {
        scales.x.min -= 1;
        scales.x.max -= 1;
      }
    }

    chart.update();
  }

  useEffect(() => {
    const chartInstance = chartRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      scrollWheel(e, chartInstance);
    };

    chartInstance.ctx.canvas.addEventListener("wheel", handleWheel);

    return () => {
      chartInstance.ctx.canvas.removeEventListener("wheel", handleWheel);
    };
  }, [chartRef]);

  useEffect(() => {
    if (pageWidth <= 1536) {
      chartRef.current.config.options.scales.x.ticks.font.size = 18;
      chartRef.current.config.options.plugins.legend.labels.boxWidth = 27;
      chartRef.current.config.options.plugins.legend.labels.font.size = 14;

      chartRef.current.update();
    }
  }, [pageWidth, chartRef]);

  return (
    <StandardCard style={{ padding: "40px" }}>
      <div className="h-full w-full">
        <div className="chart ">
          <div className="chart-header">
            <Typography variant="h3">Activity by Type</Typography>

            <div>
              <Button className="year-button">
                <span className="calendar">
                  <img src={Calendar} alt="Calendar" />
                </span>
                Year
              </Button>
              <Button>
                <span className="switch">
                  <img src={Switch} alt="Switch" />
                </span>
                Switch Graph
              </Button>
            </div>
          </div>

          <div className="container-bar">
            <div className="container-body-bar">
              <Bar
                data={data}
                options={options}
                plugins={[ChartDataLabels]}
                ref={chartRef}
                className="w-full"
              ></Bar>
            </div>
            {/* <ReactEcharts option={option} /> */}
          </div>
        </div>
      </div>
    </StandardCard>
  );
};

export default ActivityByType;
