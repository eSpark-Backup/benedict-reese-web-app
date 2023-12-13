import React from "react";
import StandardCard from "../StandardCard";
import ProgressBar from "../ProgressBar";
import styles from "./AircraftInfoCard.module.scss";
const AircraftInfoCard = ({
  data: {
    regNo,
    TagIcon,
    aircraftType,
    country,
    serialNo,
    year,
    activityPast30Days,
    activityThisYear,
    charterAircraft,
    annualEmissions,
    marketValue,
    annualOperatingCost,
  }
}) => {

    const {perActivity30, totalMovements30, totalFlightsHours30, averageMissionLength30} = activityPast30Days;
    const {perActivity, totalMovements, totalFlightsHours, averageMissionLength} = activityThisYear;

  return (
    <section className="flex justify-between flex-wrap mb-10">
      <StandardCard>
        <div className="flex py-8 px-5 gap-16 w-[571px] h-[293px]">
          <div className="flex flex-col gap-8">
            <p className="text-2xl">Aircraft Type</p>
            <p className="text-2xl">Country</p>
            <p className="text-2xl">Serial Number</p>
            <p className="text-2xl">Year</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-bold">{aircraftType}</p>
            <p className="text-2xl font-bold">{country}</p>
            <p className="text-2xl font-bold">{serialNo}</p>
            <p className="text-2xl font-bold">{year}</p>
          </div>
        </div>
      </StandardCard>
      <StandardCard>
        <div className="flex w-[571px] h-[293px] flex-col">
          <div className="flex gap-8">
            <p className="text-2xl">Activity Past 30 Days</p>
            <span className={styles.tag}>
              <p>{perActivity30}%</p>
              <img src={TagIcon} alt="icon" />
            </span>
          </div>
          <div>
              <ProgressBar done="50" data={totalMovements30} />
              <ProgressBar done="50" />
              <ProgressBar done="50" />
          </div>
        </div>
      </StandardCard>
      <StandardCard>
        <div className="flex gap-20 py-8 px-5 w-[571px] h-[293px] ">
          <div className="flex flex-col gap-8">
            <p className="text-2xl">Charter Aircraft</p>
            <p className="text-2xl">Annual Emissions</p>
            <p className="text-2xl">Market Value</p>
            <p className="text-2xl">Annual Operating Cost</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-bold">{charterAircraft}</p>
            <p className="text-2xl font-bold">
              {annualEmissions.toLocaleString()} tons
            </p>
            <p className="text-2xl font-bold">
              ${marketValue.toLocaleString()}
            </p>
            <p className="text-2xl font-bold">
              ${annualOperatingCost.toLocaleString()}
            </p>
          </div>
        </div>
      </StandardCard>
    </section>
  );
};

export default AircraftInfoCard;
