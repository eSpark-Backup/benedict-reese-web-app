import React from "react";
import styles from "./ScoreIndicator.module.scss";

const ScoreIndicator = ({ score, heading }) => {
  const getStrokeDashArray = () => {
    // Calculate the dash array values based on the score and the total circumference of the circle
    const circumference = 2 * Math.PI * 15.91549431; // Assuming the radius is 15.91549431
    const progress = (score / 100) * circumference;
    const remaining = circumference - progress;
    return `${progress} ${remaining}`;
  };

  const getFillColor = () => {
    if (score >= 70) return "#00811C";
    if (score >= 25) return "#D0BB00"; // Yellow for medium score
    return "red"; // Red for very low score
  };

  return (
    <>
      <div className={styles.healthScoreIndicator}>
        <h2 className="mb-5 text-center">{heading}</h2>
        <svg
          className={styles.circleChart}
          viewBox="0 0 33.83098862 33.83098862"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.circleChartCircle}
            stroke={getFillColor()}
            strokeWidth="2.2"
            strokeDasharray={getStrokeDashArray()}
            strokeLinecap="square"
            fill="none"
            cx="16.91549431"
            cy="16.91549431"
            r="15.91549431"
            transform="rotate(-90, 16.91549431, 16.91549431)"
          />
          <text
            x="50%"
            y="60%"
            className={styles.circleChartText}
            fill={getFillColor()}
          >
            {score}%
          </text>
        </svg>
      </div>
    </>
  );
};

export default ScoreIndicator;
