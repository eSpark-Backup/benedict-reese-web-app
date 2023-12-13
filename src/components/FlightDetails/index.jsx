import React, { useState, useEffect } from "react";
import Map from "../../../src/assets/map.png";
import styles from "./FlightDetails.module.scss";
import { FaFilter } from "react-icons/fa";
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

const FlightDetails = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [originFilter, setOriginFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Simulated flight data
  const flightData = [
    {
      id: 1,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 2,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 3,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 4,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 5,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 6,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 7,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 8,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 9,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    {
      id: 10,
      origin: "Teterboro",
      destination: "Las Vegas",
      flightTime: "1 hr 52 min",
      aircraft: "Cessna Citation XLS+",
    },
    // Add more flight data as needed
  ];

  useEffect(() => {
    // Fetch flight data from an API or source
    // For this example, using the simulated flight data
    setFlights(flightData);
    setFilteredFlights(flightData);
  }, []);

  useEffect(() => {
    // Filter flights based on origin and destination
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
    // Close modal and apply filters
    handleCloseModal();
    // Perform filtering based on origin and destination
    // You may implement additional filtering logic here if needed
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

  return (
    <div className={`${styles.flightSection} block md:flex md:h-[671px]`}>
      <div className="h-full w-full md:w-7/12">
        <img src={Map} alt="Map" className="w-full h-full" />
      </div>
      <div
        className={`${styles.flightCard} w-full md:w-5/12 md:-ml-5 -mt-5 md:mt-0 `}
      >
        <div className={styles.flightCardHead}>
          <h2>Live Flights</h2>
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
                <TableCell
                  sx={{
                    fontSize: "16px",
                    color: " #B6B8BD",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  Origin
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    color: " #B6B8BD",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  Destination
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    color: " #B6B8BD",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  Flight Time
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    color: " #B6B8BD",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  Aircraft
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                borderBottom: "1px solid #F3F5F9",
              }}
            >
              {filteredFlights.map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.origin}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.flightTime}</TableCell>
                  <TableCell>{flight.aircraft}</TableCell>
                </TableRow>
              ))}
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
