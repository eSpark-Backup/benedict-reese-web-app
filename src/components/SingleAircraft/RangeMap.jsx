import { useEffect, useState } from "react";

import { GoogleMap, Circle, LoadScript, Marker } from "@react-google-maps/api";

import { Slider, TextField } from "@mui/material";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import SectionHeader from "../shared/SectionHeader";

import MapImage from "../../assets/google-map.png";

import styles from "./styles/styles.module.scss";

const RangeMap = ({ params }) => {
  const rangeDec = params.range_decrease_per_passenger;
  const rangesAircraft = params.range_km;
  const maxPax = params.max_pax;

  const [latLng, setLatLong] = useState({ lat: 37.772, lng: -80 });
  const [address, setAddress] = useState("");
  const [nbPax, setNbPax] = useState(1);
  const [range, setRange] = useState(0);

  function handleChange(address) {
    setAddress(address);
  }

  function handleSelect(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setLatLong(latLng))
      .catch((error) => console.error("Error", error));
  }

  var options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: range === undefined ? rangesAircraft * 1000 : range * 1000,
    zIndex: 1,
  };

  const handlePaxChange = (e, newValue) => {
    setNbPax(newValue);
    if (newValue !== "") {
      setRange(rangesAircraft - parseFloat(newValue) * parseFloat(rangeDec));
    }
  };

  const details = [
    {
      id: 1,
      label: "Range (Nautical Miles)",
      total: "2,504",
    },
    {
      id: 1,
      label: "Range (Miles)",
      total: "3,001",
    },
    {
      id: 1,
      label: "Adjusted Range (Nautical Miles)",
      total: "2,504",
    },
    {
      id: 1,
      label: "Adjusted Range (Miles)",
      total: "3,001",
    },
  ];

  return (
    <section className={`px-10 py-20 ${styles.section}`}>
      <main
        className={`${styles.main_range_map} bg-[#ffffff] shadow-[0_28px_56px_-20px_rgba(0,0,0,0.25)] rounded-xl lg:grid xl:grid grid-cols-12 h-[605px]`}
      >
        <div
          className={`${styles.span4} col-span-4 xl:col-span-4 p-[33px_100px_0px_39px]`}
        >
          <SectionHeader title="Range Map" className={styles.heading} />

          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyB7zRbK_udn4vYNr4neiaPd71SuyldNIg4"
            libraries={["places"]}
          >
            <PlacesAutocomplete
              value={address}
              onChange={handleChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div
                  className={`${styles.sliderBox} mt-[46px] w-[358px] m-auto`}
                >
                  <div className="">
                    <div className={`grid grid-cols-12 ${styles.slider}`}>
                      <label
                        htmlFor="paxNumber"
                        className="col-span-5 text-[#000000] text-base"
                      >
                        Pax number
                      </label>

                      <Slider
                        valueLabelDisplay="auto"
                        aria-label="Volume"
                        value={nbPax}
                        max={maxPax}
                        onChange={handlePaxChange}
                        className="col-span-7"
                      />
                    </div>

                    <div
                      className={`grid grid-cols-12 items-center mt-[46px] ${styles.inputFieldDiv}`}
                    >
                      <label
                        htmlFor="startLocation"
                        className="col-span-5 text-[#000000] text-base"
                      >
                        Start Location
                      </label>

                      <TextField
                        // {...getInputProps({
                        //   placeholder: "Enter Location...",
                        //   className: "location-search-input",
                        // })}
                        placeholder="Enter Location..."
                        id="startLocation"
                        variant="standard"
                        className={`col-span-7 ${styles.textInputFeild}`}
                      />
                    </div>
                  </div>

                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </LoadScript>

          <div className={`${styles.details} mt-[46px] pl-[22px]`}>
            {details?.map((detail) => (
              <div
                className={`flex justify-between items-center mb-[52px] ${styles.details_list}`}
              >
                <h4 className="text-[#000] text-base">{detail.label}</h4>
                <h6 className="text-[#000] font-bold text-base">
                  {detail.total}
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.span8} lg:col-span-8 xl:col-span-8 h-full`}>
          <img src={MapImage} alt="MapImage" className="w-full h-full" />
          {/* <Map
            max_pax={maxPax}
            rangeDecrease={rangeDec}
            aicraftRange={rangesAircraft}
          /> */}
        </div>
      </main>
    </section>
  );
};

export default RangeMap;

function Map({ rangeDecrease, aicraftRange, max_pax }) {
  const [latLng, setLatLong] = useState({ lat: 37.772, lng: -80 });
  const [address, setAddress] = useState("");
  const [nbPax, setNbPax] = useState(1);
  const [range, setRange] = useState(0);

  useEffect(() => {
    setRange(aicraftRange);
  }, []);

  function handleChange(address) {
    setAddress(address);
  }

  function handleSelect(address) {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setLatLong(latLng))
      .catch((error) => console.error("Error", error));
  }

  var options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: range === undefined ? aicraftRange * 1000 : range * 1000,
    zIndex: 1,
  };

  const handlePaxChange = (e, newValue) => {
    setNbPax(newValue);
    if (newValue !== "") {
      setRange(aicraftRange - parseFloat(newValue) * parseFloat(rangeDecrease));
    }
  };

  return (
    <div className="h-full">
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyB7zRbK_udn4vYNr4neiaPd71SuyldNIg4"
        libraries={["places"]}
      >
        <GoogleMap
          zoom={2}
          center={latLng}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
          mapContainerClassName="map-container"
          mapContainerStyle={{ height: "100%" }}
        >
          <Circle center={latLng} options={options} />
          <Marker position={latLng} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
