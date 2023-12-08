import React from "react";
import "../../styles/Search.module.scss";
import BasicCard from "../../components/common/BasicCard";
import { useState } from "react";
import flightsToday from '../../images/flights_today.svg'
import flightsMonthly from '../../images/flights_monthly.svg'
import flightsPast30 from '../../images/flights_past30.svg'
import flightPending from '../../images/arrowPending.svg';
import flightPast from '../../images/arrowPast.svg';

const IndustryOverview = () => {
  const [data, setData] = useState([
    {
      NoOfFlights: 6540,
      PerNoOfFlights: 12.7,
      NoOfHours: 12570,
      PerNoOfHours: 7.7,
      isFlightsPending: { status: true, statusIcon:flightPending },
      typeOfFlight: { name: "Today", icon: flightsToday },
    },
    {
      NoOfFlights: 12650,
      PerNoOfFlights: 7.37,
      NoOfHours: 18570,
      PerNoOfHours: 12.7,
      isFlightsPending: { status: true, statusIcon:flightPending },
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
    <div style={{display:'flex', justifyContent:'space-between'}}>
      {data.map(item => <BasicCard item={item}/>)}
    </div>
  )
  // return <BasicCard item={data[0]} />;
};

export default IndustryOverview;
