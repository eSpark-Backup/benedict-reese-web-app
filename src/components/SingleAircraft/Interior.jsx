import cn from "classnames";
import global from "../styles/global.module.scss";
import SectionHeader from "../shared/SectionHeader";
import numeral from "numeral";
import StandardCard from "../common/StandardCard";

const Interior = ({ params, unit }) => {
  return (
    <section className="mt-[53px] block">
      <StandardCard
        className={`w-full ${
          localStorage.getItem("isSidebarOpen") === "true"
            ? "px-[16px]"
            : "px-[22px]"
        } py-[26px]`}
      >
        <div className="mb-[9px]">
          <SectionHeader title="Interior" />
        </div>

        <main>
          <div
            className={`grid grid-cols-12 ${
              localStorage.getItem("isSidebarOpen") === "true"
                ? "pl-[14px] pr-[6px]"
                : "pl-[55px] pr-[15px]"
            }`}
          >
            <div className="col-span-5 mt-[18px] pr-[53px]">
              <div className={cn(global.rows)}>
                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Maximum Passengers
                  </span>
                  <span>
                    {params.max_pax === 0
                      ? "-"
                      : numeral(params.max_pax).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Typical Passengers
                  </span>
                  <span>
                    {params.typical_pax === 0
                      ? "-"
                      : numeral(params.typical_pax).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Number of Living Zones
                  </span>
                  <span>
                    {params.living_zones === 0
                      ? "-"
                      : numeral(params.living_zones).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Cabin Noise (dB)
                  </span>
                  <span>
                    {params.cabin_noise === 0
                      ? "-"
                      : numeral(params.cabin_noise).format("0,0")}
                  </span>
                </div>
              </div>
            </div>
            {/* -------- */}

            <div className="col-span-1 justify-center">
              <span className="w-[2px] bg-[#DEDEDE] h-[226px] m-auto block"></span>
            </div>

            {/* --------- */}

            <div
              className={`col-span-6 mt-[18px] ${
                localStorage.getItem("isSidebarOpen") === "true"
                  ? "pl-[0px]"
                  : "pl-[15px]"
              }`}
            >
              <div className={cn(global.rows)}>
                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Max Cabin Altitude{" "}
                    {unit === "Imperial Units" ? "(Feet)" : "(Meters)"}
                  </span>
                  <span>
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

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Sea Level Cabin{" "}
                    {unit === "Imperial Units" ? "(Feet)" : "(Meters)"}
                  </span>
                  <span>
                    {unit === "Imperial Units"
                      ? params.sea_level_cabin === 0
                        ? "-"
                        : numeral(params.sea_level_cabin).format("0,0")
                      : params.altitude_sea_level_meters === 0
                      ? "-"
                      : numeral(params.altitude_sea_level_meters).format("0,0")}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Pressure Differential{" "}
                    {unit === "Imperial Units" ? "(PSI)" : "(kPa)"}
                  </span>
                  <span>
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
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Cabin Volume{" "}
                    {unit === "Imperial Units"
                      ? "(Cubic Feet)"
                      : "(Cubic Meters)"}
                  </span>
                  <span>
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
