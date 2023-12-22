import React, { useState } from "react";
import styles from "./FlightCost.module.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import StandardCard from "../common/StandardCard";

export const FlightCost = () => {
  const [inputValues, setInputValues] = useState({
    yearOfManufacture: "",
    airframeHours: "",
    estimatedFutureValue: "",
  });

  const handleInputChange = (event, field) => {
    setInputValues({ ...inputValues, [field]: event.target.value });
  };

  const rows = [
    {
      id: 1,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
    {
      id: 2,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
    {
      id: 3,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
    {
      id: 4,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
    {
      id: 5,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
    {
      id: 6,
      column1: "2012",
      column2: "$21,000,000",
      column3: "$21,500,000",
      column4: "$19,500,000",
    },
  ];

  return (
    <StandardCard
      style={{
        padding: "25px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        marginLeft: "-10px",
        backgroundColor: "white",
      }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.table}>
            <h3>New Purchase Price</h3>
            <h4>$21,000,000000</h4>
          </div>
          <div className={styles.table}>
            <h3>Depreciation Rate</h3>
            <h4>2.5%</h4>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.table}>
            <h3>Year of Manufacture</h3>
            <input
              type="text"
              value={inputValues.yearOfManufacture}
              onChange={(e) => handleInputChange(e, "yearOfManufacture")}
              className={styles.inputCost}
            />
          </div>
          <div className={styles.table}>
            <h3>Current Market Value</h3>
            <h4>$21,000,000</h4>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.table}>
            <h3>Airframe Hours</h3>
            <input
              type="text"
              value={inputValues.airframeHours}
              onChange={(e) => handleInputChange(e, "airframeHours")}
              className={styles.inputCost}
            />
          </div>
          <div className={styles.table}>
            <h3>Adjusted Value</h3>
            <h4>$21,000,000</h4>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.table}>
            <h3>Estimated Future Value</h3>
            <input
              type="text"
              value={inputValues.estimatedFutureValue}
              onChange={(e) => handleInputChange(e, "estimatedFutureValue")}
              className={styles.inputCost}
            />
          </div>
          <div className={styles.table}>
            <h3>Future Value</h3>
            <h4>$21,000,000</h4>
          </div>
        </div>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          overflowY: "none",
          maxHeight: "530px",
        }}
      >
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#FAFAFC",
            }}
          >
            <TableRow>
              <TableCell sx={{ border: "none", color: "#B6B8BD" }}>
                YEAR
              </TableCell>
              <TableCell sx={{ border: "none", color: "#B6B8BD" }}>
                CURRENT VALUE
              </TableCell>
              <TableCell sx={{ border: "none", color: "#B6B8BD" }}>
                ADJUSTED VALUE
              </TableCell>
              <TableCell sx={{ border: "none", color: "#B6B8BD" }}>
                FUTURE VALUE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{ borderBottom: "1px solid #F3F5F9" }} key={row.id}>
                <TableCell sx={{ border: "none" }}>{row.column1}</TableCell>
                <TableCell sx={{ border: "none" }}>{row.column2}</TableCell>
                <TableCell sx={{ border: "none" }}>{row.column3}</TableCell>
                <TableCell sx={{ border: "none" }}>{row.column4}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StandardCard>
  );
};

export default FlightCost;
