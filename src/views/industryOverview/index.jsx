import React from "react";
import "../../styles/Search.module.scss";
import BasicCard from "../../components/common/BasicCard";
import { useState } from "react";
import flightsToday from "../../images/flights_today.svg";
import flightsMonthly from "../../images/flights_monthly.svg";
import flightsPast30 from "../../images/flights_past30.svg";
import flightPending from "../../images/arrowPending.svg";
import flightPast from "../../images/arrowPast.svg";
import Chart from "../../components/charts/pie";
import HealthScoreIndicator from "../../components/ScoreIndicator";
import ScoreIndicator from "../../components/ScoreIndicator";
import { HealthScore } from "../../components/HealthScore";
import NewsEventCard from "../../components/common/NewsEventCard";
import FlightDetails from "../../components/FlightDetails";
import styles from "./IndustryOverview.module.scss";
import Map from "../../assets/map.png";
import RoutesMap from "../../assets/routes map.png";
import AirportMap from "../../assets/airport map.png";
import LineChart from "../../components/charts/line";
import ChartTriBoxes from "../../components/ChartTriBoxes";
import StandardCard from "../../components/common/StandardCard";
import ActivityByType from "../../components/ActivityByType";

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

  const liveFlightData = [
    {
      id: 1,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 2,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 3,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 4,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 5,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 6,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 7,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 8,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 9,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 10,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
  ];

  // const liveFlightHeaders = ["Origin", "Destination", "Flight Time", "Aircraft"];

  const liveFlightHeaders = [
    { label: "Origin", key: "origin" },
    { label: "Destination", key: "destination" },
    { label: "Flight Time", key: "flightTime" },
    { label: "Aircraft", key: "aircraft" },
  ];

  const flightRoute = [
    {
      id: 1,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 2,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 3,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 4,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 5,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 6,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 7,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 8,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 9,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 10,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
  ];

  const flightRouteHeaders = [
    { label: "ORIGIN", key: "origin" },
    { label: "DESTINATION", key: "destination" },
    { label: "MOVEMENTS", key: "movements" },
    { label: "CHANGE", key: "change" },
    { label: "GRAPH", key: "graph" },
  ];

  const topAirports = [
    {
      id: 1,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 2,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 3,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 4,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 5,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 6,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 7,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 8,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 9,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 10,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
  ];

  const topAirportsHeaders = [
    { label: "AIRPORT", key: "airport" },
    { label: "COUNTRY", key: "country" },
    { label: "MOVEMENTS", key: "movements" },
    { label: "CHANGE", key: "change" },
    { label: "GRAPH", key: "graph" },
  ];

  const toplocationsHeaders = [
    { label: "COUNTRY", key: "country" },
    { label: "MOVEMENTS", key: "movements" },
    { label: "CHANGE", key: "change" },
    { label: "GRAPH", key: "graph" },
  ];

  const toplocations = [
    {
      id: 1,
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 2,
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 3,
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 4,
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 5,
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 6,
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 7,
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 8,
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 9,
      country: "United Kingdom",
      movements: "654,555",
      change: "12.7%",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 10,
      country: "United Kingdom",
      movements: "654,555",
      change: "1.7%",
      graph: "View",
      customStyleKey: "graph",
    },
  ];

  const lineData = {
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

  const lineYears = [
    { year: 2019, bgColor: "#6C60FF" },
    { year: 2020, bgColor: "#CE2A96" },
    { year: 2021, bgColor: "#106CC2" },
    { year: 2022, bgColor: "#FF8660" },
    { year: 2023, bgColor: "#04BF00" },
  ];

  return (
    <>
      <div
        className={`${styles.industryOverviewSection} mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 xl:gap-15 gap-3 mt-32`}
        >
          {data.map((item, index) => (
            <BasicCard item={item} key={index} />
          ))}
        </div>

        <div className=" flex flex-col md:block md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StandardCard>
            <Chart
              heading={chart1Heading}
              chartData={chart1Data}
              chartLabels={chart1Labels}
              backgroundColor={chart1BackgroundColor}
            />
          </StandardCard>
          <StandardCard>
            <Chart
              heading={chart2Heading}
              chartData={chart2Data}
              chartLabels={chart2Labels}
              backgroundColor={chart2BackgroundColor}
            />
          </StandardCard>
          <div className="col-span-3 sm:col-span-2 grid grid-cols-1 w-full">
            <HealthScore />
          </div>
        </div>

        <div className=" flex flex-col md:block md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StandardCard>
            <Chart
              heading={chart3Heading}
              chartData={chart3Data}
              chartLabels={chart3Labels}
              backgroundColor={chart3BackgroundColor}
            />
          </StandardCard>
          <StandardCard>
            <Chart
              heading={chart4Heading}
              chartData={chart4Data}
              chartLabels={chart4Labels}
              backgroundColor={chart4BackgroundColor}
            />
          </StandardCard>
          <div className="col-span-3 sm:col-span-2 grid grid-cols-1 w-full">
            <NewsEventCard />
          </div>
        </div>

        <FlightDetails
          flightData={liveFlightData}
          image={Map}
          detailsHeading={"Live Flights"}
          tableHeaders={liveFlightHeaders}
          filterFields={['origin' ]}
        />
        <div className="block lg:flex w-full justify-between gap-10">
          <div className="flex flex-col w-full lg:w-[70%] gap-10">
            <LineChart heading={"Flight History"} data={lineData} years={lineYears} sideText={"Number of Flights"} showButtons title="Flight History" />
            <ActivityByType />
          </div>
          <ChartTriBoxes />
        </div>
        <FlightDetails
          flightData={flightRoute}
          image={RoutesMap}
          detailsHeading={"Top Routes"}
          tableHeaders={flightRouteHeaders}
          filterFields={['origin']}
        />
        <FlightDetails
          flightData={topAirports}
          image={AirportMap}
          detailsHeading={"Top Airports"}
          tableHeaders={topAirportsHeaders}
          filterFields={['airport']}
        />
        <FlightDetails
          flightData={toplocations}
          image={AirportMap}
          detailsHeading={"Top Locations"}
          tableHeaders={toplocationsHeaders}
          filterFields={['country' ]}
        />
      </div>
    </>
  );
};

export default IndustryOverview;
