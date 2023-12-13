import React, { useState, useEffect } from "react";
import styles from "./FlightDetails.module.scss";
import { FaFilter } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const FlightDetails = ({ flightData, image, detailsHeading, tableHeaders }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [originFilter, setOriginFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setFlights(flightData);
    setFilteredFlights(flightData);
  }, [flightData]);

  useEffect(() => {
    let filtered = flights.filter((flight) => {
      if (
        (!originFilter ||
          flight.origin.toLowerCase().includes(originFilter.toLowerCase())) &&
        (!destinationFilter ||
          flight.destination
            .toLowerCase()
            .includes(destinationFilter.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
    setFilteredFlights(filtered);
  }, [flights, originFilter, destinationFilter]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFilter = () => {
    handleCloseModal();
    let filtered = flights.filter((flight) => {
      if (
        (!originFilter ||
          flight.origin.toLowerCase().includes(originFilter.toLowerCase())) &&
        (!destinationFilter ||
          flight.destination
            .toLowerCase()
            .includes(destinationFilter.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
    setFilteredFlights(filtered);
  };

  const renderTableRows = () => {
    return filteredFlights.map((flight, index) => {
      return (
        <TableRow key={flight.id}>
          {tableHeaders.map((header, index) => (
            <TableCell key={index}>
              {header.key === "graph" && flight.customStyleKey === "graph" ? (
                <span className={styles.graphText}>{flight[header.key]}</span>
              ) : header.key === "change" && !isNaN(parseFloat(flight[header.key])) ? (
                <div className={parseFloat(flight[header.key]) < 10 ? styles.lessThanTen : styles.greaterThanTen}>
                  <span>{flight[header.key]}</span>
                  {parseFloat(flight[header.key]) > 0 && parseFloat(flight[header.key]) < 10 ? (
                    <MdOutlineArrowOutward className={styles.logo} />
                  ) : (
                    <MdOutlineArrowOutward className={styles.logo} />
                  )}
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
  
  

  return (
    <div className={styles.flightSection}>
        <img
          src={image}
          alt="Map"
          className="w-full md:w-2/1 lg:w-1/2 xl:w-1/2"
        />
      <div
        className={`${styles.flightCard} w-full  md:-ml-5 -mt-5 md:mt-0 `}
      >
        <div className={styles.flightCardHead}>
          <h2>{detailsHeading}</h2>
          <Button
            variant="contained"
            onClick={handleOpenModal}
            sx={{
              width: "112px",
              height: "38px",
              borderRadius: "12px",
              border: "1px solid #EBECF2",
              background: "#FFF",
              boxShadow: "0px 21px 19.7px -9px rgba(0, 0, 0, 0.05)",
              color: "#000",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "35px",
              marginRight: "30px",
            }}
          >
            <FaFilter className={styles.filterButton} />
            Filter
          </Button>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            overflowY: "scroll",
            maxHeight: "530px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ background: "#FAFAFC" }}>
                {tableHeaders.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontSize: "16px",
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
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Filter Options</DialogTitle>
          <DialogContent>
            <TextField
              type="text"
              placeholder="Enter origin..."
              value={originFilter}
              onChange={(e) => setOriginFilter(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Enter destination..."
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button onClick={handleFilter}>Apply Filters</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default FlightDetails;
