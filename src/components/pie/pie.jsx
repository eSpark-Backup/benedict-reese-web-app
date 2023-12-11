import React from "react";
import { Doughnut } from "react-chartjs-2";
import StandardCard from "../common/StandardCard";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Chart = ({ chartData, chartLabels, backgroundColor, heading }) => {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Countries",
        data: chartData,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  };

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
    <div >
      <StandardCard style={{height:"525px"}} >
        <h2 style={{paddingTop:"20px", paddingBottom:"20px", paddingLeft:"25px"}}>{heading}</h2>
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            marginLeft: "120px",
            left: "-55px",
          }}
        >
          <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "10px",
            marginLeft: "30px",
            marginBottom: "20px",
          }}
        >
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
      </StandardCard>
    </div>
  );
};

export default Chart;