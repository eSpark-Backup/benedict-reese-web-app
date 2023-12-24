import React from "react";
import StandardCard from "../common/StandardCard";
import styles from "./HealthScore.module.scss";
import { LuArrowLeftRight } from "react-icons/lu";
import ScoreIndicator from "../ScoreIndicator";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineExclamation } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const healthData = [
  {
    icon: <IoMdCheckmark className={styles.checkmarkIcon} />,
    className: styles.checkBox,
    content: "Flight activity has been increasing every year at over 10%",
  },
  {
    icon: <AiOutlineExclamation className={styles.exclaimIcon} />,
    className: styles.exclaimBox,
    content: "Increase in number of aircraft coming to market",
  },
  {
    icon: <IoMdClose className={styles.crossIcon} />,
    className: styles.crossBox,
    content:
      "Economic concerns and increase in fuel prices may impact future activity",
  },
];

export const HealthScore = ({showButton}) => {
  return (
    <>
      <StandardCard
        style={{
          // height: "525px",
          // width: "892px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={styles.healthScore} style={{ display: "flex" }}>
            <h1>Health Score</h1>
            <button> AI Beta </button>
          </div>
          {!showButton && (
          <button className={styles.iconButton}>
            <LuArrowLeftRight className={styles.rightLeft} />{" "}
            <span className={styles.rightLeftText}>Ask</span>
          </button>
          )}
        </div>
        <div
          style={{
            marginTop: "40px",
            marginBottom: "40px",
          }}
          className=" grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-10"
        >
          <ScoreIndicator score={70} heading={"CURRENT HEALTH"} />
          <ScoreIndicator score={20} heading={"FUTURE OUTLOOK"} />
          <ScoreIndicator score={50} heading={"MARKET STABILITY"} />
          <ScoreIndicator score={100} heading={"FLIGHT ACTIVITY"} />
        </div>
        {healthData.map((item, index) => (
          <div className={styles.healthScoreContainer} key={index}>
            <div className={item.className}>{item.icon}</div>
            <p>{item.content}</p>
          </div>
        ))}
      </StandardCard>
    </>
  );
};
