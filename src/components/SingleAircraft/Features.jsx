import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Features = ({ params }) => {
  return (
    <section
      className={`mb-[53px] block max-[1366px]:w-[49%] ${styles.features_section}`}
    >
      <StandardCard
        className={`w-full pl-[22px] pr-[30px] py-[26px] bg-[#ffffff] ${styles.feature_card}`}
      >
        <div className={`mb-[9px] ${styles.header}`}>
          <SectionHeader title="Features" className={styles.heading} />
        </div>

        <main>
          <div className={`flex pl-[37px] ${styles.details}`}>
            <div className={`mt-[18px] ${styles.left_div}`}>
              <div className={`mr-[53px] ${styles.left_item}`}>
                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Minimum Pilots
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.minimum_pilots === 0 ? "-" : params.minimum_pilots}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Toilet Available
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.toilet ? "Yes" : "No"}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Shower Available
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.shower ? "Yes" : "No"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Space to Sleep
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.space_to_sleep ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* ---------- */}

            <div className={`justify-center mr-[30px] ${styles.border_div}`}>
              <span
                className={`w-[2px] bg-[#DEDEDE] h-[226px] m-auto block ${styles.border}`}
              ></span>
            </div>

            {/* ----------- */}

            <div className={`mt-[18px] ${styles.right_div} flex-1`}>
              <div className={""}>
                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Typical Avionics Suite
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.typical_avionic_suite}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Flat Floor
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.flat_floor ? "Yes" : "No"}
                  </span>
                </div>

                <div
                  className={`flex items-center justify-between mb-[34px] ${styles.detail_item}`}
                >
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Inflight Baggage Access
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.baggage_access ? "Yes" : "No"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-[#000000] ${styles.left_span}`}>
                    Dedicated Bedroom
                  </span>

                  <span className={`text-[#000000] ${styles.right_span}`}>
                    {params.dedicated_bed ? "Yes" : "No"}
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

export default Features;
