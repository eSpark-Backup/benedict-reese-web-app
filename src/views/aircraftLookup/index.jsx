import React, { useEffect, useState } from "react";
import styles from "./AircraftLookup.module.scss";
import AircraftInfoCard from "../../components/common/AircraftInfoCard";
import TagIcon from "../../images/arrowPending.svg";
import { styled } from "@mui/material";
import NewHeader from "../../components/common/NewHeader/Header";
import VerticalProgressBars from "../../components/charts/bar";
import { HealthScore } from "../../components/HealthScore";
import FlightDetails from "../../components/FlightDetails";
import RoutesMap from "../../assets/routes map.png";
import AirportMap from "../../assets/airport map.png";
import Chart from "../../components/charts/pie";
import { Insights } from "../../components/Insights";
import HistoryCards from "../../components/historyCards";

const AircraftLookup = () => {
  const [data, setData] = useState(
    {
      regNo: "N898TS",
      TagIcon,
      aircraftType: "Bombardier Global Express",
      country: "United States of America",
      serialNo: 95,
      year: 2012,
      activityPast30Days: {
        perActivity30: 7.37,
        totalMovements30: {
          value: "252 flights",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        totalFlightsHours30: {
          value: "300 hours",
          color:
            "linear-gradient(269.98deg, #FF8A00 -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(82, 71, 198, 0) 163.5%)",
          width: 50,
          height: 20,
        },
        averageMissionLength30: {
          value: "1.2 hours",
          color:
            "linear-gradient(269.98deg, #03B15E -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(3, 177, 94, 0) 163.5%)",
          width: 30,
          height: 20,
        },
      },
      activityThisYear: {
        perActivity: 10.37,
        totalMovements: {
          value: "500 flights",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 50,
          height: 20,
          height: 20,
        },
        totalFlightsHours: {
          value: "700 hours",
          color:
            "linear-gradient(269.98deg, #FF8A00 -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(82, 71, 198, 0) 163.5%)",
          width: 90,
          height: 20,
          height: 20,
        },
        averageMissionLength: {
          value: "1.2 hours",
          color:
            "linear-gradient(269.98deg, #03B15E -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(3, 177, 94, 0) 163.5%)",
          width: 30,
          height: 20,
          height: 20,
        },
      },
      charterAircraft: "Yes",
      annualEmissions: 3500,
      marketValue: 21000000,
      annualOperatingCost: 1200000,
    },
    {
      regNo: "M898TS",
      TagIcon,
      aircraftType: "Bombardier Global Express",
      country: "United States of America",
      serialNo: 95,
      year: 2012,
      activityPast30Days: {
        perActivity: 7.37,
        totalMovements: 252,
        totalFlightsHours: 300,
        averageMissionLength: 1.2,
      },
      ActivityThisYear: {
        perActivity: 10.37,
        totalMovements: 500,
        totalFlightsHours: 700,
        averageMissionLength: 1.2,
      },
      charterAircraft: "Yes",
      annualEmissions: 3500,
      marketValue: 21000000,
      annualOperatingCost: 1200000,
    },
    {
      regNo: "L898TS",
      TagIcon,
      aircraftType: "Bombardier Global Express",
      country: "United States of America",
      serialNo: 95,
      year: 2012,
      activityPast30Days: {
        perActivity: 7.37,
        totalMovements: 252,
        totalFlightsHours: 300,
        averageMissionLength: 1.2,
      },
      ActivityThisYear: {
        perActivity: 10.37,
        totalMovements: 500,
        totalFlightsHours: 700,
        averageMissionLength: 1.2,
      },
      charterAircraft: "Yes",
      annualEmissions: 3500,
      marketValue: 21000000,
      annualOperatingCost: 1200000,
    }
  );

  const flightVisited = [
    {
      id: 1,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 2,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 3,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 4,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 5,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 6,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 7,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 8,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 9,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 10,
      airport: "London Biggin Hill",
      country: "United Kingdom",
      times: "270",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
  ];

  const flightVisitedHeaders = [
    { label: "AIRPORT", key: "airport" },
    { label: "COUNTRY", key: "country" },
    { label: "TIMES VISITED", key: "times" },
    { label: "DATE LAST FLOWN", key: "date" },
    { label: "GRAPH", key: "graph" },
  ];

  const flightRoutes = [
    {
      id: 1,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 2,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 3,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 4,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 5,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 6,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 7,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 8,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 9,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
    {
      id: 10,
      origin: "London Biggin Hill",
      destination: "Teterboro",
      times: "654,555",
      date: "21st January 2023",
      graph: "View",
      customStyleKey: "graph",
    },
  ];

  const flightRoutesHeaders = [
    { label: "ORIGIN", key: "origin" },
    { label: "DESTINATION", key: "destination" },
    { label: "TIMES VISITED", key: "times" },
    { label: "DATE LAST FLOWN", key: "date" },
    { label: "GRAPH", key: "graph" },
  ];

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

  const transHistoryHeaders = [
    { label: "PREVIOUS REG", key: "preReg" },
    { label: "NEW REG", key: "newReg" },
    { label: "DATE", key: "date" },
  ];
  const accidentHeaders = [
    { label: "DATE", key: "date" },
    { label: "SEVERITY", key: "severity" },
    { label: "INCIDENT DESCRIPTION", key: "incidentDescription" },
    { label: "RATING", key: "rating" },
  ];

  const accidentData = [
    {
      id: 1,
      date: "20th November 2023",
      severity: "Total Loss",
      incidentDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum bibendum, sodales tortor vel, ",
      rating: "7",
    },
    {
      id: 1,
      date: "20th November 2023",
      severity: "Total Loss",
      incidentDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum bibendum, sodales tortor vel, ",
      rating: "7",
    },
    {
      id: 1,
      date: "20th November 2023",
      severity: "Total Loss",
      incidentDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum bibendum, sodales tortor vel, ",
      rating: "7",
    },
  ];
  const transHistoryData = [
    {
      id: 1,
      preReg: "N7777S",
      newReg: "N898TS",
      date: "18 October 2014",
    },
    {
      id: 2,
      preReg: "N7777S",
      newReg: "N898TS",
      date: "18 October 2014",
    },
    {
      id: 3,
      preReg: "N7777S",
      newReg: "N898TS",
      date: "18 October 2014",
    },
    {
      id: 4,
      preReg: "N7777S",
      newReg: "N898TS",
      date: "18 October 2014",
    },
    {
      id: 5,
      preReg: "N7777S",
      newReg: "N898TS",
      date: "18 October 2014",
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const drawerWidth = 300;
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", false);
  }, []);

  const sidebarOpenHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    localStorage.setItem("isSidebarOpen", !isSidebarOpen);
  };

  return (
    <>
      <Main open={!isSidebarOpen}>
        <NewHeader
          openSidebar={isSidebarOpen}
          sidebarHandler={() => setIsSidebarOpen(!isSidebarOpen)}
        />
          <div className={styles.container}>
            <header className="flex flex-col items-center justify-center mb-24 xl:mb-32 mt-20">
              <h1 className="font-semibold xl:font-bold text-4xl xl:text-6xl text-center">
                Enter registration number of <br />
                aircraft
              </h1>

              <input
                className="w-[535px] h-20 rounded-xl text-center font-bold text-5xl mt-8"
                type="text"
                placeholder="N898TS"
              />
            </header>
            <AircraftInfoCard data={data} />
            <div style={{ marginBottom: "50px" }}>
            <div className="md:grid grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 ">
              <div className="lg:col-span-1 col-span-3 sm:col-span-2 grid grid-cols-1 w-full">
                  <HealthScore />
                </div>
              <div className="lg:col-span-1">
                <Insights />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
              <div className="lg:w-3/4 ">
                <VerticalProgressBars />
              </div>
            <div className="lg:w-1/4">
              <Chart
                heading={chart1Heading}
                chartData={chart1Data}
                chartLabels={chart1Labels}
                backgroundColor={chart1BackgroundColor}
                display={true}
              />
            </div>
            </div>
            <FlightDetails
              flightData={flightRoutes}
              image={RoutesMap}
              detailsHeading={"Routes"}
              tableHeaders={flightRoutesHeaders}
            />
            <div className="block md:flex gap-4 my-10">
            <HistoryCards
              title="Transaction History"
              className="w-full xl:w-4/12"
              tableHeader={transHistoryHeaders}
              tableData={transHistoryData}
            />
            <HistoryCards
              title="Accident History"
              className="w-full xl:w-8/12"
              tableHeader={accidentHeaders}
              tableData={accidentData}
            />
          </div>
            <FlightDetails
              flightData={flightVisited}
              image={AirportMap}
              detailsHeading={"Airports Visited"}
              tableHeaders={flightVisitedHeaders}
            />
          </div>
      </Main>
    </>
  );
};

export default AircraftLookup;
