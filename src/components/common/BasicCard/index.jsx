import React from "react";
import styles from "./BasicCard.module.scss";
import StandardCard from "../StandardCard";

const BasicCard = ({
  item: {
    NoOfFlights,
    PerNoOfFlights,
    NoOfHours,
    PerNoOfHours,
    isFlightsPending: { status, statusIcon },
    typeOfFlight: { name, icon },
  },
}) => {
  let formattedNoOfHours = NoOfHours.toLocaleString();
  let formattedNoOfFlights = NoOfFlights.toLocaleString();

  return (
    <StandardCard>
      <div
        className={`${styles.container} py-[25px] lg:px-[55px] px-[35px] flex flex-col items-center lg:block`}
      >
        <div className={`${styles.flightStatus} mb-4 sm:mb-0`}>
          <span className="2xl:w-[52px] 2xl:h-[52px] p-2">
            <img src={icon} alt="" />
          </span>
          <p className="2xl:text-xl text-lg">Flights {name}</p>
        </div>

        <div className={`${styles.NoOfFlights} mb-4 sm:mb-0  flex`}>
          <h1 className="2xl:text-[52px] sm:text-[30px] mr-5 ">
            {formattedNoOfFlights}
          </h1>
          <span className={status ? styles.flightPending : styles.flightPast}>
            <p>{PerNoOfFlights}%</p>
            <img src={statusIcon} alt="icon" />
          </span>
        </div>

        <div className={`${styles.NoOfHours} mb-4 sm:mb-0  flex`}>
          <p className="2xl:text-[36px] mr-5 ">{formattedNoOfHours} hours</p>
          <span className={status ? styles.flightPending : styles.flightPast}>
            <p>{PerNoOfHours}%</p>
            <img src={statusIcon} alt="icon" />
          </span>
        </div>
      </div>
    </StandardCard>
  );
};

export default BasicCard;
