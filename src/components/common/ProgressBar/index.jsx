import React, { useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ done: { value, color, width } }) => {
  return (
    <div
      className={styles.ProgressBar}
      style={{
        width: width,
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
