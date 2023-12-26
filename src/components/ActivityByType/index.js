import React, { useEffect, useRef, useState } from "react";

import { Bar, Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Button,
  Typography,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import StandardCard from "../common/StandardCard";

import Calendar from "../../assets/calendar.png";
import Switch from "../../assets/switch.png";

import {
  customTooltip,
  darkSide,
  datalabels,
  labels,
  legend,
  lineBg,
  lineLabels,
  lineLegend,
  lineScales,
  otherValues,
  scales,
  scrollUsingMouse,
  scrollUsingTouchpad,
  years,
  yearsData,
} from "./data";

import "./ActivityByType.scss";

Chartjs.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ActivityByType = () => {
  const chartRef = useRef();
  const lineChartRef = useRef();

  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [year, setYear] = React.useState([]);
  const [showCalender, setShowCalender] = useState(false);
  const [switchGraph, setSwitchGraph] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setYear(typeof value === "string" ? value.split(",") : value);
    setShowCalender(true);
  };

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const stackedChartDatasets = (dataset, index) => {
    return {
      label: datalabels[index],
      backgroundColor: darkSide[index],
      borderColor: "transparent",
      borderWidth: 2,
      borderRadius: {
        topLeft: 12,
        topRight: 12,
        bottomLeft: 12,
        bottomRight: 12,
      },
      borderSkipped: false,
      data: dataset,
      barPercentage: 1,
      categoryPercentage: 0.9,
    };
  };

  const lineChartDatasets = (dataset, index) => {
    return {
      label: datalabels[index],
      backgroundColor: lineBg[index],
      borderColor: lineBg[index],
      data: dataset,
      tension: 0.4,
      pointRadius: 0,
      hoverBackgroundColor: "white",
      pointHoverRadius: 5,
      pointHoverBorderColor: "#676767",
      clip: true,
    };
  };

  const data = {
    labels: labels,
    datasets:
      year.length === 0
        ? yearsData[2023].map((dataset, index) =>
            stackedChartDatasets(dataset, index)
          )
        : yearsData[year[0]].map((dataset, index) =>
            stackedChartDatasets(dataset, index)
          ),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        ...otherValues,
        formatter: (_, context) => {
          // Display the total above the last dataset in the stack
          if (context.datasetIndex === context.chart.data.datasets.length - 1) {
            const total =
              year.length === 0
                ? yearsData[2023].reduce(
                    (acc, dataset) => acc + dataset[context.dataIndex],
                    0
                  )
                : yearsData[year[0]].reduce(
                    (acc, dataset) => acc + dataset[context.dataIndex],
                    0
                  );
            return total;
          }
          return "";
        },
      },
      legend: legend,
    },
    scales: scales,

    tooltips: customTooltip,
  };

  // Adding wheel event to scroll on chart
  useEffect(() => {
    const chartInstance = chartRef.current;

    if (chartInstance && chartInstance.ctx && chartInstance.ctx.canvas) {
      const handleWheel = (e) => {
        e.preventDefault();
        scrollWheel(e, chartInstance);
      };

      chartInstance.ctx?.canvas.addEventListener("wheel", handleWheel);
      return () => {
        chartInstance.ctx?.canvas.removeEventListener("wheel", handleWheel);
      };
    }
  }, [chartRef]);

  function scrollWheel(Wheel, chart) {
    if (chart && chart.ctx && chart.ctx.canvas) {
      const { scales } = chart.config.options;
      const { x } = scales;
      const { deltaY, deltaX } = Wheel;
      const labelLength = data.labels.length;

      // Check if the user is not scrolling using a touchpad
      scrollUsingMouse(deltaY, x, labelLength);
      scrollUsingTouchpad(deltaX, x, labelLength);

      chart.update();
    }
  }

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

  const lineData = {
    labels: lineLabels,
    datasets:
      year.length === 0
        ? yearsData[2023].map((dataset, index) =>
            lineChartDatasets(dataset, index)
          )
        : yearsData[year[0]].map((dataset, index) =>
            lineChartDatasets(dataset, index)
          ),
  };

  Tooltip.positioners.top = (_, eventPosition) => {
    const {
      chartArea: { top },
      scales: { x },
    } = lineChartRef?.current;

    return {
      x: x.getPixelForValue(x.getValueForPixel(eventPosition.x)),
      y: top,
    };
  };

  const titleTooltip = () => {
    return "";
  };

  const lineOptions = {
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: lineLegend,
      tooltip: {
        position: "top",
        intersect: false,
        mode: "index",
        enabled: true,
        displayColors: false,
        yAlign: "bottom",
        backgroundColor: "#F4F4F6",
        bodyColor: "black",
        bodyFont: {
          weight: "normal",
          family: "Poppins",
        },
        callbacks: {
          title: titleTooltip,
        },
      },
    },
    scales: lineScales,
  };

  useEffect(() => {
    if (chartRef?.current !== null) {
      if (chartRef?.current?.config) {
        if (pageWidth <= 1536) {
          chartRef.current.config.options.scales.x.ticks.font.size = 18;
          chartRef.current.config.options.plugins.legend.labels.boxWidth = 27;
          chartRef.current.config.options.plugins.legend.labels.font.size = 14;

          chartRef.current.update();
        }

        if (pageWidth <= 1100) {
          chartRef.current.config.options.scales.x.ticks.font.size = 14;
          chartRef.current.config.options.plugins.legend.labels.boxWidth = 20;
          chartRef.current.config.options.plugins.legend.labels.font.size = 14;

          chartRef.current.update();
        }
      }
    }

    if (lineChartRef?.current !== null) {
      if (lineChartRef?.current?.config) {
        if (pageWidth <= 1536) {
          lineChartRef.current.config.options.plugins.legend.labels.padding = 12;
          lineChartRef.current.config.options.scales.y.title.font.size = 14;
          lineChartRef.current.config.options.scales.y.title.padding.bottom = 12;
          lineChartRef.current.config.options.plugins.legend.labels.boxWidth = 20;

          lineChartRef.current.update();
        }

        if (pageWidth <= 1100) {
          lineChartRef.current.config.options.plugins.legend.labels.padding = 8;
          lineChartRef.current.config.options.scales.y.title.font.size = 14;
          lineChartRef.current.config.options.scales.y.title.padding.bottom = 5;
          lineChartRef.current.config.options.plugins.legend.labels.boxWidth = 20;

          lineChartRef.current.update();
        }
      }
    }
  }, [pageWidth, chartRef, lineChartRef, switchGraph]);

  return (
    <StandardCard
      className={`activity_type_card h-full p-[33px_35px_33px_33px]`}
    >
      <div className="h-full w-full">
        <div className="chart">
          <div className="chart-header">
            <Typography variant="h3">
              {switchGraph ? "Flight History" : "Activity by Type"}
            </Typography>

            <div className="flex items-center">
              <Select
                displayEmpty
                onChange={handleChange}
                input={
                  <OutlinedInput
                    startAdornment={
                      showCalender && (
                        <InputAdornment
                          position="start"
                          className="!block !mr-[15px] ml-[5px] !h-auto !max-h-max"
                        >
                          <span className="calendar">
                            <img src={Calendar} alt="Calendar" />
                          </span>
                        </InputAdornment>
                      )
                    }
                  />
                }
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <div className="flex items-center">
                        <span className="calendar">
                          <img src={Calendar} alt="Calendar" />
                        </span>

                        <span className="placeholder">Year</span>
                      </div>
                    );
                  }

                  return selected.join(", ");
                }}
                inputProps={{ "aria-label": "Without label" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                className="year-button bg-[#FFFFFF] shadow-[0px_21px_19.7px_-9px_rgba(0,0,0,0.05)] border border-[#EBECF2] !rounded-xl"
              >
                {years?.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>

              <Button
                onClick={() => {
                  setSwitchGraph(!switchGraph);
                }}
                className="switch-button"
              >
                <span className="switch">
                  <img src={Switch} alt="Switch" />
                </span>
                Switch Graph
              </Button>
            </div>
          </div>

          <div className="container-bar">
            <div className="container-body-bar h-[45rem]">
              {switchGraph ? (
                <Line
                  data={lineData}
                  options={lineOptions}
                  ref={lineChartRef}
                  plugins={[lines]}
                  className="w-full !h-[calc(100%-48px)]"
                />
              ) : (
                <Bar
                  data={data}
                  options={options}
                  plugins={[ChartDataLabels]}
                  ref={chartRef}
                  className="w-full !h-[calc(100%-48px)]"
                ></Bar>
              )}
            </div>
          </div>
        </div>
      </div>
    </StandardCard>
  );
};

export default ActivityByType;
