import React, { useState } from "react";
import styles from "./AircraftLookup.module.scss";
import StandardCard from "../../components/common/StandardCard";
import AircraftInfoCard from "../../components/common/AircraftInfoCard";
import TagIcon from "../../images/arrowPending.svg";


const AircraftLookup = () => {
  const [data, setData] = useState({
    regNo: "N898TS",
    TagIcon,
    aircraftType: "Bombardier Global Express",
    country: "United States of America",
    serialNo: 95,
    year: 2012,
    activityPast30Days: {
      perActivity30: 7.37,
      totalMovements30: {value: 252, color:"linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)"},
      totalFlightsHours30: {value : 300, color: "linear-gradient(269.98deg, #FF8A00 -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(82, 71, 198, 0) 163.5%)"}, 
      averageMissionLength30: {value : 1.2 , color:"linear-gradient(269.98deg, #03B15E -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(3, 177, 94, 0) 163.5%)" },
    },
    activityThisYear: {
      perActivity: 10.37,
      totalMovements: {value: 500, color:"linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)"},
      totalFlightsHours: {value : 700, color: "linear-gradient(269.98deg, #FF8A00 -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(82, 71, 198, 0) 163.5%)"}, 
      averageMissionLength: {value : 1.2 , color:"linear-gradient(269.98deg, #03B15E -18.57%, rgba(135, 73, 0, 0.58) 163.48%, rgba(3, 177, 94, 0) 163.5%)" },
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
  return (
    <div className={styles.container}>

      <header className="flex flex-col items-center justify-center mb-32">
        <h1 className="font-bold text-6xl text-center">
          Enter registration number of <br />
          aircraft
        </h1>

        <input
          className="w-[535px] h-20 rounded-xl text-center font-bold text-5xl mt-8"
          type="text"
          placeholder="N898TS"
        />

      </header>
     <AircraftInfoCard data={data}/>
    </div>
  );
};

export default AircraftLookup;
