import cn from "classnames";
import global from "../styles/global.module.scss";
import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

const Features = ({ params }) => {
  return (
    <section className="mb-[53px] mt-[53px] block">
      <StandardCard
        className={`w-full ${
          localStorage.getItem("isSidebarOpen") === "true"
            ? "px-[16px]"
            : "px-[22px]"
        } py-[26px]`}
      >
        <div className="mb-[9px]">
          <SectionHeader title="Features" />
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
                    Minimum Pilots
                  </span>
                  <span>
                    {params.minimum_pilots === 0 ? "-" : params.minimum_pilots}
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
                    Toilet Available
                  </span>
                  <span>{params.toilet ? "Yes" : "No"}</span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Shower Available
                  </span>
                  <span>{params.shower ? "Yes" : "No"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Space to Sleep
                  </span>
                  <span>{params.space_to_sleep ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>

            {/* ---------- */}

            <div className="col-span-1 justify-center">
              <span className="w-[2px] bg-[#DEDEDE] h-[226px] m-auto block"></span>
            </div>

            {/* ----------- */}

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
                    Typical Avionics Suite
                  </span>
                  <span>{params.typical_avionic_suite}</span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Flat Floor
                  </span>
                  <span>{params.flat_floor ? "Yes" : "No"}</span>
                </div>

                <div className="flex items-center justify-between mb-[34px]">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Inflight Baggage Access
                  </span>
                  <span>{params.baggage_access ? "Yes" : "No"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      global.key,
                      global.key_realign,
                      "text-[#000000]"
                    )}
                  >
                    Dedicated Bedroom
                  </span>
                  <span>{params.dedicated_bed ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </StandardCard>
    </section>
  );
};

export default Features;
