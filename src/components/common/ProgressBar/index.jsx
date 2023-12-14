import React, { useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ data: { value, color, width, height } }) => {
  return (
    <div
      className={styles.ProgressBar}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <p className="text-white pr-2 font-bold ">{value}</p>
    </div>
  );
};

export default ProgressBar;
