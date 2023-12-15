import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import StandardCard from "../../components/common/StandardCard";
import { FaFilter } from "react-icons/fa";

const HistoryCards = ({ className, title, tableHeader, tableData }) => {
  const companyStockRows = () => {
    return tableData.map((flight, index) => {
      return (
        <TableRow key={flight.id}>
          {tableHeader.map((header, index) => (
            <TableCell key={index}>
              {header.key === "rating" ? (
                <span className="bg-[#befdb8] border border-2 border-[#70fd63] flex justify-center">
                  {flight[header.key]}
                </span>
              ) : (
                <span>{flight[header.key]}</span>
              )}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };

  return (
    <StandardCard className={`px-10 py-5  ${className}`}>
      <div className="flex justify-between my-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          overflowY: "auto",
          maxHeight: "530px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#FAFAFC" }}>
              {tableHeader.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontSize: "12px",
                    color: "#B6B8BD",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderBottom: "1px solid #F3F5F9" }}>
            {companyStockRows()}
          </TableBody>
        </Table>
      </TableContainer>
    </StandardCard>
  );
};

export default HistoryCards;
