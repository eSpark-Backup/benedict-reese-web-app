import React from "react";
import { Doughnut } from "react-chartjs-2";
import StandardCard from "../common/StandardCard";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./Pie.module.scss";
import ProgressBar from "../common/ProgressBar";

const Chart = ({
  chartData,
  chartLabels,
  backgroundColor,
  heading,
  display = false,
  cost,
}) => {
  const progressBarData1 = {
    value: "80%",
    color: "#5DC5C2",
    width: 80,
    height: 20,
  };
  const progressBarData2 = {
    value: "20%",
    color: "#5247C6",
    width: 30,
    height: 20,
  };
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  };
  const isSidebarOpen = localStorage.getItem("isSidebarOpen");
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[context.datasetIndex];
          const total = dataset.data.reduce((acc, val) => acc + val);
          const percentage = Math.round((value / total) * 100);
          return `${percentage}%`;
        },
        anchor: "end",
        align: "start",
        offset: 4,
        font: {
          weight: "700",
          size: "14px",
        },
      },
    },
    layout: {
      padding: {
        bottom: 40, // Adjust bottom padding for legend
      },
    },
  };

  const columns = 3; // Number of columns
  const rows = Math.ceil(chartLabels.length / columns); // Calculate rows needed

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <h2 className={styles.pieHeading}>{heading}</h2>
      <p className={styles.pieCost}>{cost}</p>
      <div
        className={`m-auto ${isSidebarOpen ? "w-auto" : "lg:w-[300px]"} ${
          isSidebarOpen ? "h-auto" : "lg:h-[300px]"
        }  flex justify-center`}
      >
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
        <div className={styles.doughnutData}></div>
      </div>
      <div className={styles.labelSection}>
        {[...Array(columns)].map((_, colIndex) => (
          <div key={colIndex} style={{ flex: 1 }}>
            {[...Array(rows)].map((_, rowIndex) => {
              const dataIndex = colIndex * rows + rowIndex;
              if (dataIndex < chartLabels.length) {
                return (
                  <div
                    key={dataIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "31px",
                        height: "18px",
                        backgroundColor:
                          data.datasets[0].backgroundColor[dataIndex],
                        marginRight: "10px",
                      }}
                    ></div>
                    <span style={{ fontSize: "12px" }}>
                      {chartLabels[dataIndex]}
                    </span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
      {display && (
        <div className={styles.pieProgressBar}>
          <ProgressBar data={progressBarData1} />
          <ProgressBar data={progressBarData2} />
          <div className={styles.pieColor}>
            <div className={styles.pieColorBoxInternational}></div>
            <span className={styles.pielabelText}>International</span>
            <div className={styles.pieColorBoxDomestic}></div>
            <span className={styles.pielabelText}>Domestic</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chart;
