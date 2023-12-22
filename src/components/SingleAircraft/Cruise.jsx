import SectionHeader from "../shared/SectionHeader";

import ProgressBar from "../common/ProgressBar";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Cruise = ({ params }) => {
  // console.log(params);
  const data = {
    cruiseSpeed: {
      Knots: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },

      MPH: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },

      Mach: {
        value1: {
          value: "252",
          color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
          width: 80,
          height: 20,
        },
        value2: {
          value: "200",
          color: "#5247C6",
          width: 70,
          height: 20,
        },
      },
    },

    altitude: {
      initialCruise: {
        value: "252",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 70,
        height: 20,
      },
      maxAltitude: {
        value: "300",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 85,
        height: 20,
      },
      rateOfClimb: {
        value: "242",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 65,
        height: 20,
      },
      fuelBurn: {
        value: "200",
        color: "linear-gradient(90deg, #8A7DE4 0%, #8FCDF5 100%)",
        width: 45,
        height: 20,
      },
    },

    groundPerformance: {
      value1: {
        value: "2,000 feet",
        color: "#5DC5C2",
        width: 70,
        height: 20,
      },
      value2: {
        value: "1,500 feet",
        color: "#5247C6",
        width: 60,
        height: 20,
      },
    },
  };

  return (
    <section className={`${styles.cruise_section} mb-[69px]`}>
      <StandardCard
        className={`w-full px-[22px] pt-[29px] pb-[60px] bg-[#ffffff] ${styles.cruiseCard}`}
      >
        <div className="flex justify-center max-[1366px]:justify-between max-[990px]:block">
          <div
            className={`mt-[5px] flex-1 ${styles.cruise_speed} max-[990px]:!w-full`}
          >
            <div
              className={`mb-[38px] ${styles.header} ${styles.curise_header}`}
            >
              <SectionHeader title="Cruise Speed" className={styles.heading} />
            </div>

            <div className={`flex mb-11 ${styles.progress}`}>
              <h6 className="text-[#000000]">knots</h6>

              <div className={`ml-[10px] flex-1 ${styles.cruise_bar}`}>
                <ProgressBar data={data.cruiseSpeed.Knots.value1} />
                <ProgressBar data={data.cruiseSpeed.Knots.value2} />
              </div>
            </div>

            <div className={`flex mb-11 ${styles.progress}`}>
              <h6 className="text-[#000000]">MPH</h6>

              <div className={`ml-[10px] flex-1 ${styles.cruise_bar}`}>
                <ProgressBar data={data.cruiseSpeed.MPH.value1} />
                <ProgressBar data={data.cruiseSpeed.MPH.value2} />
              </div>
            </div>

            <div className={`flex !mb-0 ${styles.progress}`}>
              <h6 className="text-[#000000]">Mach</h6>

              <div className={`ml-[10px] flex-1 ${styles.cruise_bar}`}>
                <ProgressBar data={data.cruiseSpeed.Mach.value1} />
                <ProgressBar data={data.cruiseSpeed.Mach.value2} />
              </div>
            </div>
          </div>

          {/* ---------- */}

          <div
            className={`justify-center mx-[35px] ${styles.border_div} max-[990px]:!w-full max-[990px]:!my-4`}
          >
            <span
              className={`w-[2px] bg-[#DEDEDE] h-[348px] m-auto block ${styles.border} max-[990px]:!h-[2px] max-[990px]:w-[100%]`}
            ></span>
          </div>

          {/* ------------- */}

          <div
            className={`mt-[5px] flex-1 ${styles.altitude} max-[990px]:!w-full`}
          >
            <div className={`mb-[22px] ${styles.header}`}>
              <SectionHeader title="Altitudes" className={styles.heading} />
            </div>

            <div className={`mb-[12px] ${styles.progress_heading}`}>
              <h6 className="mb-[3px] text-[#000000]">
                Initial Cruise Altitude (Feet)
              </h6>

              <ProgressBar data={data.altitude.initialCruise} />
            </div>

            <div className={`mb-[12px] ${styles.progress_heading}`}>
              <h6 className="mb-[3px] text-[#000000]">Max Altitude (Feet)</h6>

              <ProgressBar data={data.altitude.maxAltitude} />
            </div>

            <div className={`mb-[12px] ${styles.progress_heading}`}>
              <h6 className="mb-[3px] text-[#000000]">
                Rate of Climb (Feet per Minute)
              </h6>

              <ProgressBar data={data.altitude.rateOfClimb} />
            </div>

            <div className="">
              <h6 className="mb-[3px] text-[#000000]">
                Fuel Burn (Gallons per Hour)
              </h6>

              <ProgressBar data={data.altitude.fuelBurn} />
            </div>
          </div>
        </div>

        <div className={`mt-[42px] ${styles.ground}`}>
          <SectionHeader
            title="Ground Performance"
            className={styles.heading}
          />

          <div className="mb-[5px]">
            <ProgressBar data={data.groundPerformance.value1} />
          </div>
          <ProgressBar data={data.groundPerformance.value2} />
        </div>
      </StandardCard>
    </section>
  );
};

export default Cruise;
