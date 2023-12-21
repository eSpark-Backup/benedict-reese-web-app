import React, { useState } from "react";
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
import Modal from "../../components/common/modal/Modal";

const ChartTriBoxes = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
    {
      id: 5,
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

  const filters = {
    class: ["VLJ", "Light", "Medium", "Large", "VIP Airliner"],
    make: [
      "Bombardier",
      "Cessna",
      "Dassault",
      "Embraer",
      "Gulfstream",
      "Eclipse",
      "Hawker",
      "Honda",
      "Mitsubishi",
      "IAI",
    ],
    model: [
      "Citation Mustang",
      "Citation Encore",
      "Citation Encore+",
      "Citation XLS",
      "Citation XLS+",
      "Citation Longitude",
      "Citation M2",
    ],
  };

  const filterHandler = (filterName, filterType) => {
    setModalOpen(false);
    console.log({ filterName, filterType });
  };

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
        <TableRow className="text-center" key={flight.id}>
          {companyStockHeaders.map((header, index) => (
            <TableCell key={index} className="text-center">
              {header.key === "graph" && flight.customStyleKey === "graph" ? (
                <span className="text-center flex w-full justify-center w-full">
                  {flight[header.key]}
                </span>
              ) : header.key === "change" &&
                !isNaN(parseFloat(flight[header.key])) ? (
                <div className="flex w-full justify-center w-full">
                  {" "}
                  <span className="bg-[#befdb8] border  border-2 rounded-[12px] border-[#70fd63] flex justify-center w-20 px-1">
                    <p>{flight[header.key]}</p>
                    <img className="w-3" src={flightPending} alt="icon" />
                  </span>
                </div>
              ) : (
                <span className="flex w-full justify-center">
                  {flight[header.key]}
                </span>
              )}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };

  return (
    <div className="w-full xl:w-[30%] flex flex-col items-center">
      <StandardCard className="px-8 py-11 w-full ">
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
      <StandardCard className="px-8 py-11 w-full">
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
            onClick={() => setModalOpen(!modalOpen)}
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
            maxHeight: "430px",
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
      <Modal title={`Filter options`} toggler={modalOpen}>
        <div className="flex">
          <div className="w-full p-2 overflow-x-auto">
            <h1 className="text-xl font-semibold">Filter by Class</h1>
          </div>
          <div className="w-full p-2 overflow-x-auto">
            <h1 className="text-xl font-semibold">Filter by Make</h1>
          </div>
          <div className="w-full p-2 overflow-x-auto">
            <h1 className="text-xl font-semibold">Filter by Model</h1>
          </div>
        </div>
        <div className="flex">
          <div className="w-full p-5 overflow-x-auto">
            <div className="h-60">
              {filters.class.map((val) => {
                return (
                  <p
                    onClick={() => filterHandler(val, "category")}
                    className="p-1 text-lg font-semibold cursor-pointer"
                  >
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-full p-5 overflow-x-auto ">
            <div className="h-60">
              {filters.make.map((val) => {
                return (
                  <p
                    onClick={() => filterHandler(val, "aircraft_manufacturer")}
                    className="p-1 text-lg font-semibold cursor-pointer"
                  >
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-full p-5 overflow-x-auto ">
            <div className="h-60">
              {filters.model.map((val) => {
                return (
                  <p
                    onClick={() => filterHandler(val, "model")}
                    className="p-1 text-lg font-semibold cursor-pointer"
                  >
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
      <StandardCard className="px-8 py-11 w-full">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-semibold">Company Stock</h2>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            width: "100%",
            overflowY: "auto",
            maxHeight: "430px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Table className="flex justify-center">
            <TableHead>
              <TableRow sx={{ background: "#FAFAFC", textAlign: "center" }}>
                {companyStockHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontSize: "12px",
                      color: "#B6B8BD",
                      fontWeight: "700",
                      border: "none",
                      textAlign: "center",
                    }}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
              sx={{ borderBottom: "1px solid #F3F5F9", textAlign: "center" }}
            >
              {companyStockRows()}
            </TableBody>
          </Table>
        </TableContainer>
      </StandardCard>
    </div>
  );
};

export default ChartTriBoxes;
