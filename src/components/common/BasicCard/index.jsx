import React from "react";
import styles from "./BasicCard.module.scss";

const BasicCard = ({
  item: {
    NoOfFlights,
    PerNoOfFlights,
    NoOfHours,
    PerNoOfHours,
    isFlightsPending: { status, color, statusIcon },
    typeOfFlight: { name, icon },
  },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.flightStatus}>
        <span>
          <img src={statusIcon} alt="" />
        </span>
        <p>Flights {name}</p>
      </div>
      <div className={styles.NoOfFlights}>
        <h1>{NoOfFlights}</h1>
        <span>
          <p>{PerNoOfFlights}</p>
          <img src="" alt="icon" />
        </span>
      </div>
      <div className={styles.NoOfHours}>
        <h1>{NoOfHours}</h1>
        <span>
          <p>{PerNoOfHours}</p>
          <img src="" alt="icon" />
        </span>
      </div>
    </div>
  );
};

export default BasicCard;
