import numeral from "numeral";

import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Interior = ({ params, unit }) => {
  return (
    <section
      className={`mb-[53px] block max-[1366px]:w-[49%] ${styles.interior_section}`}
    >
      <StandardCard
        className={`w-full pl-[22px] pr-[30px] py-[26px] bg-[#ffffff] ${styles.interior_card}`}
      >
        <div className={`mb-[9px] ${styles.header}`}>
          <SectionHeader title="Interior" className={styles.heading} />
        </div>

        <main>
          <div className={`flex pl-[37px] ${styles.details}`}>
            <div className={`mt-[18px] ${styles.left_div}`}>
              <div className={`mr-[53px] ${styles.left_item}`}>
                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000]`}>Maximum Passengers</span>
                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.max_pax === 0
                      ? "-"
                      : numeral(params.max_pax).format("0,0")}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] `}>Typical Passengers</span>
                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.typical_pax === 0
                      ? "-"
                      : numeral(params.typical_pax).format("0,0")}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] `}>
                    Number of Living Zones
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.living_zones === 0
                      ? "-"
                      : numeral(params.living_zones).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-[#000000] `}>Cabin Noise (dB)</span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.cabin_noise === 0
                      ? "-"
                      : numeral(params.cabin_noise).format("0,0")}
                  </span>
                </div>
              </div>
            </div>
            {/* -------- */}

            <div className={`justify-center mr-[30px] ${styles.border_div}`}>
              <span
                className={`w-[2px] bg-[#DEDEDE] h-[226px] m-auto block ${styles.border}`}
              ></span>
            </div>

            {/* --------- */}

            <div className={`mt-[18px] ${styles.right_div} flex-1`}>
              <div className={""}>
                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] `}>
                    Max Cabin Altitude{" "}
                    {unit === "Imperial Units" ? "(Feet)" : "(Meters)"}
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {unit === "Imperial Units"
                      ? params.cabin_altitude === 0
                        ? "-"
                        : numeral(params.cabin_altitude).format("0,0")
                      : params.cabin_altitude_ceiling_meters === 0
                      ? "-"
                      : numeral(params.cabin_altitude_ceiling_meters).format(
                          "0,0"
                        )}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] `}>
                    Sea Level Cabin{" "}
                    {unit === "Imperial Units" ? "(Feet)" : "(Meters)"}
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {unit === "Imperial Units"
                      ? params.sea_level_cabin === 0
                        ? "-"
                        : numeral(params.sea_level_cabin).format("0,0")
                      : params.altitude_sea_level_meters === 0
                      ? "-"
                      : numeral(params.altitude_sea_level_meters).format("0,0")}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] `}>
                    Pressure Differential{" "}
                    {unit === "Imperial Units" ? "(PSI)" : "(kPa)"}
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {unit === "Imperial Units"
                      ? params.pressure_differential_psi === 0
                        ? "-"
                        : numeral(params.pressure_differential_psi).format(
                            "0,0"
                          )
                      : params.cabin_pressure === 0
                      ? "-"
                      : numeral(params.cabin_pressure).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-[#000000] `}>
                    Cabin Volume{" "}
                    {unit === "Imperial Units"
                      ? "(Cubic Feet)"
                      : "(Cubic Meters)"}
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {unit === "Imperial Units"
                      ? params.cabin_volume_CF === 0
                        ? "-"
                        : numeral(params.cabin_volume_CF).format("0,0")
                      : params.cabin_volume_cubicmeters === 0
                      ? "-"
                      : numeral(params.cabin_volume_cubicmeters).format("0,0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </StandardCard>
    </section>
  );
};

export default Interior;
