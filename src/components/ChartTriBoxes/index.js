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
} from "@mui/material";
import { FaFilter } from "react-icons/fa";
import StandardCard from "../common/StandardCard";
import flightPending from "../../images/arrowPending.svg";

const ChartTriBoxes = () => {
  const recentTransactHeaders = [
    { label: "AIRCRAFT", key: "aircraft" },
    { label: "SERIAL NO.", key: "serialNo" },
    { label: "REG", key: "reg" },
    { label: "DATE", key: "date" },
  ];
  const companyStockHeaders = [
    { label: "COMPANY", key: "company" },
    { label: "VALUE.", key: "value" },
    { label: "CHANGE", key: "change" },
  ];

  const companyStockData = [
    {
      id: 1,
      company: "Bombardier",
      value: "$0.002",
      change: "12.7%",
    },
    {
      id: 2,
      company: "Cessna",
      value: "$0.002",
      change: "12.7%",
    },
    {
      id: 3,
      company: "Dassault",
      value: "$0.002",
      change: "12.7%",
    },
    {
      id: 4,
      company: "Pilatus",
      value: "$0.002",
      change: "12.7%",
    },
    {
      id: 5,
      company: "Embraer",
      value: "$0.002",
      change: "12.7%",
    },
  ];
  const transactionData = [
    {
      id: 1,
      aircraft: "Bombardier",
      serialNo: "R-100",
      reg: "R-100",
      date: "R-100",
    },
    {
      id: 2,
      aircraft: "Bombardier",
      serialNo: "R-100",
      reg: "R-100",
      date: "R-100",
    },
    {
      id: 3,
      aircraft: "Bombardier",
      serialNo: "R-100",
      reg: "R-100",
      date: "R-100",
    },
    {
      id: 4,
      aircraft: "Bombardier",
      serialNo: "R-100",
      reg: "R-100",
      date: "R-100",
    },
    {
      id: 5,
      aircraft: "Bombardier",
      serialNo: "R-100",
      reg: "R-100",
      date: "R-100",
    },
  ];

  const renderTableRows = () => {
    return transactionData.map((flight, index) => {
      return (
        <TableRow key={flight.id}>
          {recentTransactHeaders.map((header, index) => (
            <TableCell key={index}>
              {header.key === "graph" && flight.customStyleKey === "graph" ? (
                <span>{flight[header.key]}</span>
              ) : header.key === "change" &&
                !isNaN(parseFloat(flight[header.key])) ? (
                <div>
                  <span>{flight[header.key]}</span>
                </div>
              ) : (
                flight[header.key]
              )}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };
  const companyStockRows = () => {
    return companyStockData.map((flight, index) => {
      return (
        <TableRow key={flight.id}>
          {companyStockHeaders.map((header, index) => (
            <TableCell key={index}>
              {header.key === "graph" && flight.customStyleKey === "graph" ? (
                <span>{flight[header.key]}</span>
              ) : header.key === "change" &&
                !isNaN(parseFloat(flight[header.key])) ? (
                <span className="bg-[#befdb8] border border-2 border-[#70fd63] flex justify-center w-20 px-1">
                  <p>{flight[header.key]}</p>
                  <img className="w-3" src={flightPending} alt="icon" />
                </span>
              ) : (
                flight[header.key]
              )}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };

  return (
    <div className="w-full lg:w-[30%] flex flex-col justify-between items-center">
      <StandardCard className="p-5 w-full ">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-semibold">Insights</h2>
          <Button
            variant="contained"
            sx={{
              height: "38px",
              borderRadius: "12px",
              border: "1px solid #EBECF2",
              background: "#FFF",
              boxShadow: "0px 21px 19.7px -9px rgba(0, 0, 0, 0.05)",
              color: "#000",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            <FaFilter color="grey" fill="grey" className="mr-1" />
            Regenerate
          </Button>
        </div>
        <div>
          <StandardCard className="border py-5 px-2 rounded-lg">
            What has happened of note within the private aviation industry
            within the past 7 days? Tell me about any relevant news, what the
            flight activity has been like, and what your predictions are for the
            future of the industry.
          </StandardCard>
          <p className="py-5 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eget ipsum bibendum, sodales tortor vel, dignissim enim. Mauris
            condimentum erat augue, id bibendum elit pretium non. Ut vel mi quis
            mi tristique rutrum ut eget nibh. Curabitur neque erat, tincidunt et
            est nec, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget ipsum bibendum, sodales tortor vel, dignissim enim.
            Mauris condimentum erat augue, id bibendum elit pretium non. Ut vel
            mi quis mi tristique rutrum ut eget nibh. Curabitur neque erat,
            tincidunt et est nec,{" "}
          </p>
        </div>
      </StandardCard>
      <StandardCard className="p-11 w-full">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-semibold">Recent Transactions</h2>
          <Button
            variant="contained"
            sx={{
              height: "38px",
              borderRadius: "12px",
              border: "1px solid #EBECF2",
              background: "#FFF",
              boxShadow: "0px 21px 19.7px -9px rgba(0, 0, 0, 0.05)",
              color: "#000",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            <FaFilter color="grey" fill="grey" className="mr-1" />
            Filter
          </Button>
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
                {recentTransactHeaders.map((header, index) => (
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
              {renderTableRows()}
            </TableBody>
          </Table>
        </TableContainer>
      </StandardCard>
      <StandardCard className="p-11 w-full">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-semibold">Company Stock</h2>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            width: "100%",
            overflowY: "auto",
            maxHeight: "530px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#FAFAFC" }}>
                {companyStockHeaders.map((header, index) => (
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
    </div>
  );
};

export default ChartTriBoxes;
