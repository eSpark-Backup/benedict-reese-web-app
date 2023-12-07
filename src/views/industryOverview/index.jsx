import React from "react";
import "../../styles/Search.module.scss";
import BasicCard from "../../components/common/BasicCard";
import { useState } from "react";
import flightsToday from '../../images/flights_today.svg'
import flightsMonthly from '../../images/flights_monthly.svg'
import flightsPast30 from '../../images/flights_past30.svg'

const IndustryOverview = () => {
  const [data, setData] = useState([
    {
      NoOfFlights: 6540,
      PerNoOfFlights: 12.7,
      NoOfHours: 12570,
      PerNoOfHours: 7.7,
      isFlightsPending: { status: true, color: "green", statusIcon:flightsToday },
      typeOfFlight: { name: "Today", icon: "" },
    },
    {
      NoOfFlights: 12650,
      PerNoOfFlights: 7.37,
      NoOfHours: 18570,
      PerNoOfHours: 12.7,
      isFlightsPending: { status: true, color: "green", statusIcon: flightsMonthly},
      typeOfFlight: { name: "this Month", icon: "" },
    },
    {
      NoOfFlights: 30222,
      PerNoOfFlights: 1.7,
      NoOfHours: 46570,
      PerNoOfHours: 7.7,
      isFlightsPending: { status: false, color: "red", statusIcon:flightsPast30 },
      typeOfFlight: { name: "Past 30 Days", icon: "" },
    },
  ]);

  return <BasicCard item={data[0]} />;
};

export default IndustryOverview;
