import React from "react";
import "../../styles/Search.module.scss";
import BasicCard from "../../components/common/BasicCard";
import { useState } from "react";
import flightsToday from "../../images/flights_today.svg";
import flightsMonthly from "../../images/flights_monthly.svg";
import flightsPast30 from "../../images/flights_past30.svg";
import flightPending from "../../images/arrowPending.svg";
import flightPast from "../../images/arrowPast.svg";
import Chart from "../../components/pie/pie";
import HealthScoreIndicator from "../../components/ScoreIndicator";
import ScoreIndicator from "../../components/ScoreIndicator";
import { HealthScore } from "../../components/HealthScore";
import NewsEventCard from "../../components/common/NewsEventCard";
import FlightDetails from "../../components/FlightDetails";
import styles from "./IndustryOverview.module.scss";

const IndustryOverview = () => {
  const chart1Heading = ["Departures by Region"];
  const chart1Data = [15, 30, 5, 5, 7, 25, 13];
  const chart1Labels = [
    "North America",
    "South America",
    "Middle East",
    "Europe",
    "Australia",
    "Africa",
    "Asia",
  ];
  const chart1BackgroundColor = [
    "#FF0000",
    "#FFB800",
    "#4F0000",
    "#63C700",
    "#0097C7",
    "#0400B8",
    "#B8B8B8",
  ];

  const chart2Heading = ["Flights by Aircraft Class"];
  const chart2Data = [15, 30, 5, 25, 25];
  const chart2Labels = ["Prop", "VLJ", "Light Jet", "Medium Jet", "Large Jet"];
  const chart2BackgroundColor = [
    "#FF0000",
    "#FFB800",
    "#63C700",
    "#0400B8",
    "#4F0000",
  ];

  const chart3Heading = ["Flights by Manufacturer"];
  const chart3Data = [15, 25, 7, 30, 5, 5, 13];
  const chart3Labels = [
    "Bombardier",
    "Gulfstream",
    "Beechcraft",
    "Cessna",
    "Dassault",
    "Hawker",
    "Other",
  ];
  const chart3BackgroundColor = [
    "#FF0000",
    "#0400B8",
    "#0097C7",
    "#FFB800",
    "#63C700",
    "#4F0000",
    "#B8B8B8",
  ];

  const chart4Heading = ["Domestic Vs International"];
  const chart4Data = [20, 80];
  const chart4Labels = ["Domestic", "International"];
  const chart4BackgroundColor = ["#FFB800", "#FF0000"];

  const [data, setData] = useState([
    {
      NoOfFlights: 6540,
      PerNoOfFlights: 12.7,
      NoOfHours: 12570,
      PerNoOfHours: 7.7,
      isFlightsPending: { status: true, statusIcon: flightPending },
      typeOfFlight: { name: "Today", icon: flightsToday },
    },
    {
      NoOfFlights: 12650,
      PerNoOfFlights: 7.37,
      NoOfHours: 18570,
      PerNoOfHours: 12.7,
      isFlightsPending: { status: true, statusIcon: flightPending },
      typeOfFlight: { name: "this Month", icon: flightsMonthly },
    },
    {
      NoOfFlights: 30222,
      PerNoOfFlights: 1.7,
      NoOfHours: 46570,
      PerNoOfHours: 7.7,
      isFlightsPending: { status: false, statusIcon: flightPast },
      typeOfFlight: { name: "Past 30 Days", icon: flightsPast30 },
    },
  ]);

  return (
    <>
      <div
        className={`${styles.industryOverviewSection} mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8`}
      >
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <BasicCard item={item} key={index} />
          ))}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          <Chart
            heading={chart1Heading}
            chartData={chart1Data}
            chartLabels={chart1Labels}
            backgroundColor={chart1BackgroundColor}
          />
          <Chart
            heading={chart2Heading}
            chartData={chart2Data}
            chartLabels={chart2Labels}
            backgroundColor={chart2BackgroundColor}
          />
          <div className="col-span-3 sm:col-span-2 grid grid-cols-1 gap-4">
          <HealthScore />
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          <Chart
            heading={chart3Heading}
            chartData={chart3Data}
            chartLabels={chart3Labels}
            backgroundColor={chart3BackgroundColor}
          />
          <Chart
            heading={chart4Heading}
            chartData={chart4Data}
            chartLabels={chart4Labels}
            backgroundColor={chart4BackgroundColor}
          />
          <div className="col-span-3 sm:col-span-2 grid grid-cols-1 gap-4">
          <NewsEventCard />
          </div>
        </div>

        <FlightDetails />
      </div>
    </>
  );
};

export default IndustryOverview;
