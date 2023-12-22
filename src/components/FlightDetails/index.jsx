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
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import LineChart from "../charts/line";

const FlightDetails = ({
  flightData,
  image,
  detailsHeading,
  tableHeaders,
  hideFilterButton,
  airportCount,
  filterFields,
}) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [originFilter, setOriginFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [airportFilter, setAirportFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    setFlights(flightData);
    setFilteredFlights(flightData);
  }, [flightData]);

  useEffect(() => {
    let filtered = flights.filter((flight) => {
      const found = filterFields.some((field) => {
        if (
          flight[field] &&
          typeof flight[field] === "string" &&
          flight[field]
            .toLowerCase()
            .includes(
              field === "origin"
                ? originFilter.toLowerCase()
                : field === "destination"
                ? destinationFilter.toLowerCase()
                : field === "airport"
                ? airportFilter.toLowerCase()
                : field === "country"
                ? countryFilter.toLowerCase()
                : ""
            )
        ) {
          return true;
        }
        return false;
      });
      return found;
    });
    setFilteredFlights(filtered);
  }, [
    flights,
    originFilter,
    destinationFilter,
    airportFilter,
    countryFilter,
    filterFields,
  ]);

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

  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Number of Flights 1",
        data: [50, 100, 200, 300, 400, 500, 420, 480, 490, 470, 430, 500],
        borderColor: "#FF8660", // Change the line color for this dataset
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };

  const renderTableRows = () => {
    return filteredFlights.map((flight, index) => {
      const isRowExpanded = expandedRow === index;
      const viewText = isRowExpanded ? "Hide" : "View";
  
      return (
        <React.Fragment key={flight.id}>
          <TableRow>
            {tableHeaders.map((header, headerIndex) => (
              <TableCell key={headerIndex} sx={{ textAlign: "-webkit-center" }}>
                {header.key === "graph" && flight.customStyleKey === "graph" ? (
                  <span
                    className={styles.graphText}
                    onClick={() => setExpandedRow(isRowExpanded ? null : index)}
                    style={{ cursor: "pointer" }}
                  >
                    {viewText}
                  </span>
                ) : (
                  <span className="text-center flex justify-center">
                    {flight[header.key]}
                  </span>
                )}
              </TableCell>
            ))}
          </TableRow>
          {isRowExpanded && (
            <TableRow >
              <TableCell colSpan={tableHeaders.length}>
                <Accordion>
                  <LineChart
                    chartWidth="665px"
                    chartHeight="260px"
                    data={lineData}
                  />
                </Accordion>
              </TableCell>
            </TableRow>
          )}
        </React.Fragment>
      );
    });
  };
  

  return (
    <div className={`${styles.flightSection} block md:flex md:h-[671px]`}>
      <img src={image} alt="Map" className="w-full md:w-7/12" />
      <div
        className={`${styles.flightCard} w-full md:w-[43%] md:-ml-5 -mt-5 md:mt-0 `}
      >
        <div className={styles.flightCardHead}>
          <h2>{detailsHeading}</h2>
          {!hideFilterButton && (
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
          )}
          {airportCount && (
            <span className="text-[#8000FF] mr-7 mt-7">
              {airportCount} Airports
            </span>
          )}
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
              {renderTableRows()}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Filter Options</DialogTitle>
          <DialogContent>
            {filterFields.map((field, index) => (
              <TextField
                key={index}
                type="text"
                placeholder={`Enter ${field}...`}
                value={
                  field === "origin"
                    ? originFilter
                    : field === "destination"
                    ? destinationFilter
                    : field === "airport"
                    ? airportFilter
                    : field === "country"
                    ? countryFilter
                    : ""
                }
                onChange={(e) =>
                  field === "origin"
                    ? setOriginFilter(e.target.value)
                    : field === "destination"
                    ? setDestinationFilter(e.target.value)
                    : field === "airport"
                    ? setAirportFilter(e.target.value)
                    : field === "country"
                    ? setCountryFilter(e.target.value)
                    : ""
                }
              />
            ))}
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
