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
  }
}) => {
  let formattedNoOfHours = NoOfHours.toLocaleString();
  let formattedNoOfFlights = NoOfFlights.toLocaleString();


  return (
    <StandardCard>
      <div className={styles.container}>
        <div className={styles.flightStatus}>
          <span>
            <img src={icon} alt="" />
          </span>
          <p>Flights {name}</p>
        </div>
        <div className={styles.NoOfFlights}>
          <h1>{formattedNoOfFlights}</h1>
          <span className={status ? styles.flightPending : styles.flightPast}>
            <p>{PerNoOfFlights}%</p>
            <img src={statusIcon} alt="icon" />
          </span>
        </div>
        <div className={styles.NoOfHours}>
          <p>{formattedNoOfHours} hours</p>
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
