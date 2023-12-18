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
  },
}) => {
  const {
    perActivity30,
    totalMovements30,
    totalFlightsHours30,
    averageMissionLength30,
  } = activityPast30Days;
  const {
    perActivity,
    totalMovements,
    totalFlightsHours,
    averageMissionLength,
  } = activityThisYear;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:gap-15 gap-3 mt-32">
      <StandardCard>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl ">Aircraft Type</p>
          <p className="text-lg 2xl:text-xl font-bold w-8/12">{aircraftType}</p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl ">Country</p>
          <p className="text-lg 2xl:text-xl font-bold w-8/12">{country}</p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl ">Serial</p>
          <p className="text-lg 2xl:text-xl font-bold w-8/12">{serialNo}</p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl ">Year</p>
          <p className="text-lg 2xl:text-xl font-bold w-8/12">{year}</p>
        </div>
      </StandardCard>
      <StandardCard className="relative">
        <div className="flex  flex-col px-7 py-7 relative">
          <div className="flex gap-8 mb-2 items-center">
            <p className="text-lg 2xl:text-2xl">Activity Past 30 Days</p>
            <span className={styles.tag}>
              <p>{perActivity30}%</p>
              <img src={TagIcon} alt="icon" />
            </span>
          </div>
          <div className="mx-4 relative">
            <ProgressBar data={totalMovements30} />
            <ProgressBar data={totalFlightsHours30} />
            <ProgressBar data={averageMissionLength30} />
          </div>
          <div className="flex hidden 2xl:flex justify-end items-center right-0 absolute w-40 top-[110px]">
            <div className="flex flex-col gap-2 px-2">
              <div
                style={{
                  background: `${totalMovements30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
              <div
                style={{
                  background: `${totalFlightsHours30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
              <div
                style={{
                  background: `${averageMissionLength30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
            </div>
            <div>
              <p className="text-[14px]">Total Movements</p>
              <p className="text-[14px]">Total Flight Hours</p>
              <p className="text-[14px]">Average Mission Length</p>
            </div>
          </div>
          <div className="flex gap-8 mb-2 items-center mt-8">
            <p className="text-lg 2xl:text-2xl">Activity this Year</p>
            <span className={styles.tag}>
              <p>{perActivity}%</p>
              <img src={TagIcon} alt="icon" />
            </span>
          </div>
          <div className="mx-4">
            <ProgressBar data={totalMovements} />
            <ProgressBar data={totalFlightsHours} />
            <ProgressBar data={averageMissionLength} />
          </div>
          <div className="flex  2xl:hidden justify-end items-center ">
            <div className="flex flex-col gap-2 px-2">
              <div
                style={{
                  background: `${totalMovements30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
              <div
                style={{
                  background: `${totalFlightsHours30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
              <div
                style={{
                  background: `${averageMissionLength30.color}`,
                  width: "17px",
                  height: "13px",
                }}
              />
            </div>
            <div>
              <p className="text-[14px]">Total Movements</p>
              <p className="text-[14px]">Total Flight Hours</p>
              <p className="text-[14px]">Average Mission Length</p>
            </div>
          </div>
        </div>
      </StandardCard>
      <StandardCard>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl 2xl:w-full w-6/12">
            Charter Aircraft
          </p>
          <p className="text-lg 2xl:text-xl font-bold 2xl:w-full w-6/12">
            {charterAircraft}
          </p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl 2xl:w-full w-6/12">
            Annual Emissions
          </p>
          <p className="text-lg 2xl:text-xl font-bold 2xl:w-full w-6/12">
            {annualEmissions.toLocaleString()} tons
          </p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl 2xl:w-full w-6/12">Market Value</p>
          <p className="text-lg 2xl:text-xl font-bold 2xl:w-full w-6/12">
            {marketValue.toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between py-5 px-5">
          <p className="text-lg 2xl:text-xl 2xl:w-full w-6/12">
            Annual Operating Cost
          </p>
          <p className="text-lg 2xl:text-xl font-bold 2xl:w-full w-6/12">
            {annualOperatingCost.toLocaleString()}
          </p>
        </div>
      </StandardCard>
    </section>
  );
};

export default AircraftInfoCard;
