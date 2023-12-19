import cn from "classnames";
import global from "../styles/global.module.scss";
import styles from "./styles/styles.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import numeral from "numeral";
// import SectionHeader from "../shared/SectionHeader";
import { useEffect, useState } from "react";
import StandardCard from "../common/StandardCard";
import LineChart from "../charts/line";
import { Insights } from "../Insights";
import Chart from "../charts/pie";
import OwnershipCosts from "./OwnershipCosts/OwnershipCosts";

ChartJS.register(ArcElement, Tooltip, Legend);

const KeyFacts = ({ params, currency, country, unit }) => {
  const [keyFacts, setKeyFacts] = useState([]);
  const [info, setInfo] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      )
      .then((res) => {
        setInfo(res.data[from]);
      });
  }, [from]);

  useEffect(() => {
    currency === "USD"
      ? setTo("usd")
      : currency === "GBP"
      ? setTo("gbp")
      : setTo("eur");
    setFrom("usd");
    setConversionRate(info[to]);
  }, [info, currency, to]);

  useEffect(() => {
    if (params.key_facts !== undefined) {
      setKeyFacts(params.key_facts.split("\n"));
    } else {
    }
  }, [params.key_facts]);

  const data_passengers = {
    datasets: [
      {
        label: "Pax",
        data: [params.max_pax, 19],
        backgroundColor: ["#56AD70", "rgba(255, 159, 64, 0.0)"],
        borderColor: ["#EBEBEB"],
        borderWidth: 2,
      },
    ],
  };
  const data_range = {
    datasets: [
      {
        label: "Range",
        data: [params.range_NM, 8000],
        backgroundColor: ["#DBE050", "rgba(255, 159, 64, 0.0)"],
        borderColor: ["#EBEBEB"],
        borderWidth: 2,
      },
    ],
  };

  const data_cruise = {
    datasets: [
      {
        label: "Cruise Speed",
        data: [params.high_cruise_knots, 516],
        backgroundColor: ["#DA3978", "rgba(255, 159, 64, 0.0)"],
        borderColor: ["#EBEBEB"],
        borderWidth: 2,
      },
    ],
  };

  const data_cost = {
    datasets: [
      {
        label: "Cost Per Hour",
        data: [params.NA_hourly_total, 10000],
        backgroundColor: ["#90EB4B", "rgba(255, 159, 64, 0.0)"],
        borderColor: ["#EBEBEB"],
        borderWidth: 2,
      },
    ],
  };

  const data_fuel = {
    datasets: [
      {
        label: "Hourly Fuel Burn",
        data: [params.hourly_fuel_burn_GPH, 626],
        backgroundColor: ["#D857F4", "rgba(255, 159, 64, 0.0)"],
        borderColor: ["#EBEBEB"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="px-2">
      <div className="px-10 my-10 block lg:flex items-between justify-between gap-4">
        <StandardCard className="w-full lg:w-[70%]">
          <div className="2xl:py-20 2xl:px-8 px-4 py-10">
            <h1 className="font-bold text-3xl 2xl:text-6xl w-[779px]">
              {params.aircraft_name}
            </h1>
            <div className="mt-4 px-12">
              <ul>
                {keyFacts.map((fact, index) => {
                  return (
                    <li
                      className="text-xl 2xl:text-3xl text-start list-outside list-disc"
                      key={index}
                    >
                      {fact}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </StandardCard>
        <StandardCard className={"w-full lg:w-[30%]"}>
          <div className="flex items-center flex-col justify-center overflow-auto p-8 h-full ">
            <img src={`${params?.image_name}`} className="w-[40vw]" />
            <img src={`${params?.floorplan_drawing}`} className="w-[40vw] " />
          </div>
        </StandardCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:gap-15 gap-3 mt-32 px-10">
        <StandardCard>
          <div className="p-10 flex flex-col justify-center gap-8">
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production Start</p>
              <p className="text-2xl font-bold">{params.production_start}</p>
            </div>
            <div className="flex justify-between gap-12 ">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold">{params.production_end}</p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold">{params.production_end}</p>
            </div>
          </div>
        </StandardCard>
        <StandardCard>
          <div className="p-10 flex flex-col justify-center gap-8">
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production Start</p>
              <p className="text-2xl font-bold"> {params.number_in_service}</p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold"> {params.number_made}</p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold"> {params.number_in_service}</p>
            </div>
          </div>
        </StandardCard>
        <StandardCard>
          <div className="p-10 flex flex-col justify-center gap-8 ">
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production Start</p>
              <p className="text-2xl font-bold">
                {" "}
                {params.average_mission_length}
              </p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold">
                {params.average_mission_length}
              </p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-2xl">Production End</p>
              <p className="text-2xl font-bold"> {params.TO_distance_meters}</p>
            </div>
          </div>
        </StandardCard>
      </div>
      <div className="md:grid grid grid-cols-1 lg:grid-cols-2 lg:gap-8 mt-8 ">
        <div className="lg:col-span-1 col-span-3 sm:col-span-2 grid grid-cols-1 w-full">
          <LineChart title={"Fleet Flight Hours"} />
        </div>
        <div className="lg:col-span-1">
          <Insights
            mainParagraph="Explain all the costs to me if I were to buy a 2012 example of this aircraft, fly it a total of 300 hours per year and then sell it in 3 years."
            secondaryParagraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget ipsum bibendum, sodales tortor vel, dignissim enim. Mauris condimentum erat augue, id bibendum elit pretium non. Ut vel mi quis mi tristique rutrum ut eget nibh. Curabitur neque erat, tincidunt et est nec, feugiat sagittis justo. Fusce malesuada, turpis quis bibendum efficitur, risus mi aliquam felis, ac rutrum felis diam ac mi. Integer lobortis sapien turpis, eget faucibus quam elementum dapibus. Mauris laoreet lorem a aliquam mattis. Ut tellus tellus, faucibus id tellus sed, rutrum tempus dolor.",
            ]}
          />
          <StandardCard
            style={{
              padding: "30px 20px 30px 20px",
              width: "100%",
              marginTop: "40px",
            }}
          >
            <div className={cn(styles.main_print_section, styles.pdf_hidden)}>
              <section>
                <span className={cn(styles.line)}></span>
                <div className={cn(styles.doughnut_charts_wrapper)}>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Passengers</span>
                    <Doughnut
                      data={data_passengers}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_passengers}>
                      {params.max_pax}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        Pax
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Range</span>
                    <Doughnut
                      data={data_range}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_range}>
                      {unit === "Imperial Units"
                        ? numeral(params.range_NM).format("0,0")
                        : numeral(params.range_km).format("0,0")}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {unit === "Imperial Units" ? "NM" : "KM"}
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Cruise Speed</span>
                    <Doughnut
                      data={data_cruise}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_cruise}>
                      {unit === "Imperial Units"
                        ? numeral(params.high_cruise_knots).format("0,0")
                        : numeral(params.high_speed_cruise_kmh).format(
                            "0,0"
                          )}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {" "}
                        {unit === "Imperial Units" ? "Knots" : "Kmh"}
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Cost per Hour</span>
                    <Doughnut
                      data={data_cost}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_cost}>
                      {currency === "USD"
                        ? "$"
                        : currency === "EUR"
                        ? "€"
                        : "£"}
                      {currency === "USD"
                        ? country === "North America"
                          ? numeral(params.NA_hourly_total).format("0,0") !== 0
                            ? numeral(params.NA_hourly_total).format("0,0")
                            : "-"
                          : country === "Europe"
                          ? numeral(params.EU_hourly_total).format("0,0") !== 0
                            ? numeral(params.EU_hourly_total).format("0,0")
                            : "-"
                          : country === "South America"
                          ? numeral(params.SA_hourly_total).format("0,0") !== 0
                            ? numeral(params.SA_hourly_total).format("0,0")
                            : "-"
                          : numeral(params.AS_hourly_total).format("0,0") !== 0
                          ? numeral(params.AS_hourly_total).format("0,0")
                          : "-"
                        : country === "North America"
                        ? numeral(params.NA_hourly_total).format("0,0") !== 0
                          ? numeral(
                              params.NA_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : country === "Europe"
                        ? numeral(params.EU_hourly_total).format("0,0") !== 0
                          ? numeral(
                              params.EU_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : country === "South America"
                        ? params.SA_hourly_total !== 0
                          ? numeral(
                              params.SA_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : params.AS_hourly_total !== 0
                        ? numeral(
                            params.AS_hourly_total * conversionRate
                          ).format("0,0")
                        : "-"}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        per hour
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Fuel Burn</span>
                    <Doughnut
                      data={data_fuel}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_fuel}>
                      {unit === "Imperial Units"
                        ? numeral(params.hourly_fuel_burn_GPH).format("0,0")
                        : numeral(params.hourly_fuel_burn_LPH).format(
                            "0,0"
                          )}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {unit === "Imperial Units" ? "GPH" : "LPH"}
                      </span>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </StandardCard>
        </div>
      </div>

      {/* 

        <ul className={cn(styles.facts)}>
          <div>
            {keyFacts.map((fact, index) => {
              return <li key={index}> * {fact}</li>;
            })}
          </div>
          <div className={cn(styles.main_print_key)}>
            <p style={{ fontWeight: "bold" }}>Range</p>
            <p style={{ fontWeight: "bold" }}>Cruise</p>
            <p style={{ fontWeight: "bold" }}>Passangers</p>
          </div>
        </ul>

        <div className={cn(styles.img_container)}>
          <img
            src={`${params?.image_name}`}
            className={cn(styles.single_image)}
            alt=""
          />
          <StandardCard
            style={{
              padding: "30px 20px 30px 20px",
              width: "100%",
              marginTop: "40px",
            }}
          >
            <div className={cn(styles.main_print_section, styles.pdf_hidden)}>
              <section>
                <span className={cn(styles.line)}></span>
                <div className={cn(styles.doughnut_charts_wrapper)}>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Passengers</span>
                    <Doughnut
                      data={data_passengers}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_passengers}>
                      {params.max_pax}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        Pax
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Range</span>
                    <Doughnut
                      data={data_range}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_range}>
                      {unit === "Imperial Units"
                        ? numeral(params.range_NM).format("0,0")
                        : numeral(params.range_km).format("0,0")}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {unit === "Imperial Units" ? "NM" : "KM"}
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Cruise Speed</span>
                    <Doughnut
                      data={data_cruise}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_cruise}>
                      {unit === "Imperial Units"
                        ? numeral(params.high_cruise_knots).format("0,0")
                        : numeral(params.high_speed_cruise_kmh).format(
                            "0,0"
                          )}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {" "}
                        {unit === "Imperial Units" ? "Knots" : "Kmh"}
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Cost per Hour</span>
                    <Doughnut
                      data={data_cost}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_cost}>
                      {currency === "USD"
                        ? "$"
                        : currency === "EUR"
                        ? "€"
                        : "£"}
                      {currency === "USD"
                        ? country === "North America"
                          ? numeral(params.NA_hourly_total).format("0,0") !== 0
                            ? numeral(params.NA_hourly_total).format("0,0")
                            : "-"
                          : country === "Europe"
                          ? numeral(params.EU_hourly_total).format("0,0") !== 0
                            ? numeral(params.EU_hourly_total).format("0,0")
                            : "-"
                          : country === "South America"
                          ? numeral(params.SA_hourly_total).format("0,0") !== 0
                            ? numeral(params.SA_hourly_total).format("0,0")
                            : "-"
                          : numeral(params.AS_hourly_total).format("0,0") !== 0
                          ? numeral(params.AS_hourly_total).format("0,0")
                          : "-"
                        : country === "North America"
                        ? numeral(params.NA_hourly_total).format("0,0") !== 0
                          ? numeral(
                              params.NA_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : country === "Europe"
                        ? numeral(params.EU_hourly_total).format("0,0") !== 0
                          ? numeral(
                              params.EU_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : country === "South America"
                        ? params.SA_hourly_total !== 0
                          ? numeral(
                              params.SA_hourly_total * conversionRate
                            ).format("0,0")
                          : "-"
                        : params.AS_hourly_total !== 0
                        ? numeral(
                            params.AS_hourly_total * conversionRate
                          ).format("0,0")
                        : "-"}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        per hour
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "130px",
                    }}
                    className={cn(styles.chart_container)}
                  >
                    <span>Fuel Burn</span>
                    <Doughnut
                      data={data_fuel}
                      options={{
                        responsive: true,
                        cutout: 50,
                        plugins: {
                          tooltip: {
                            enabled: false, // <-- this option disables tooltips
                          },
                        },
                      }}
                    />
                    <span className={styles.chart_label_fuel}>
                      {unit === "Imperial Units"
                        ? numeral(params.hourly_fuel_burn_GPH).format("0,0")
                        : numeral(params.hourly_fuel_burn_LPH).format(
                            "0,0"
                          )}{" "}
                      <br></br>
                      <span className={styles.chart_label_description}>
                        {unit === "Imperial Units" ? "GPH" : "LPH"}
                      </span>
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </StandardCard>
        </div>
      </div>
 

      {/* <ul className={cn(styles.facts)}>
          <div>
            {keyFacts.map((fact, index) => {
              return <li key={index}> * {fact}</li>;
            })}
          </div>
          <div className={cn(styles.main_print_key)}>
            <p style={{ fontWeight: "bold" }}>Range</p>
            <p style={{ fontWeight: "bold" }}>Cruise</p>
            <p style={{ fontWeight: "bold" }}>Passangers</p>
          </div>
        </ul> */}
      {/* 
        <div className={cn(styles.img_container)}>
          <img
            src={`${params?.image_name}`}
            className={cn(styles.single_image)}
            alt=""
          />
          <img
            src={`${params?.floorplan_drawing}`}
            className={cn(styles.single_image)}
            alt=""
          />
        </div> */}
    </div>
  );
};

export default KeyFacts;
