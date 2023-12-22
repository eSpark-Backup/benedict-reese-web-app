import React, { useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ data: { value, color, width, height } }) => {
  return (
    <div
      className={styles.ProgressBar}
      style={{
        width: `${width}%`,
        height: `${height}px`,
        background: `${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <p className="text-white text-sm xl:text-md pr-1 xl:pr-2 xl:font-bold ">
        {value}
      </p>
    </div>
  );
};

export default ProgressBar;
