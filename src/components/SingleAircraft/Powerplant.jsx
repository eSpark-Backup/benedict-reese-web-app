import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Powerplant = ({ params, unit }) => {
  return (
    <StandardCard
      className={`mb-[31px] pb-[49px] bg-[#ffffff] ${styles.powerplant_section}`}
    >
      <div className={`px-[28px] pt-[33px] ${styles.powerplant}`}>
        <SectionHeader title="Powerplant" className={styles.heading} />

        <div
          className={`${styles.upper_details} mt-[30px] flex justify-center max-[1366px]:justify-evenly items-center`}
        >
          <div className={`${styles.detail}`}>
            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[45px] ${styles.left_para}`}>
                Minimum Pilots
              </p>

              <p className="text-[#000000]">{params.minimum_pilots}</p>
            </div>

            <div className="flex justify-between">
              <p className={`text-[#000000] mr-[45px] ${styles.left_para}`}>
                Minimum Pilots
              </p>

              <p className="text-[#000000]">{params.number_made}</p>
            </div>
          </div>

          {/* -------- */}

          <div className={`justify-center mx-[53px] ${styles.border_div}`}>
            <span
              className={`w-[2px] bg-[#DEDEDE] h-[129px] block m-auto ${styles.border}`}
            ></span>
          </div>

          {/* ------- */}

          <div className={`${styles.detail} `}>
            <div className={``}>
              <div className="">
                <div
                  className={`flex justify-between mb-[30px] ${styles.detail_list}`}
                >
                  <p className={`text-[#000000] mr-[45px] ${styles.left_para}`}>
                    Minimum Pilots
                  </p>

                  <p>{params.minimum_pilots}</p>
                </div>
              </div>

              <div className="">
                <div className="flex justify-between">
                  <p className={`text-[#000000] mr-[45px] ${styles.left_para}`}>
                    Minimum Pilots
                  </p>

                  <p className="text-[#000000]">{params.number_made}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.lower_details} mt-[38px]`}>
          <p className="text-[#000000] font-bold text-center">
            Exterior Noise Levels (dB)
          </p>

          <div
            className={`flex justify-center mt-[23px] text-center ${styles.bottom_grid}`}
          >
            <div className="">
              <p className="text-[#000000] font-bold">Lateral</p>

              <p>{params.lateral_db}</p>
            </div>

            <div className={`mx-[78px] ${styles.middle_item}`}>
              <p className="text-[#000000] font-bold">Flyover</p>

              <p>{params.flyover_db}</p>
            </div>

            <div className="">
              <p className="text-[#000000] font-bold">Approach</p>

              <p>{params.approach_db}</p>
            </div>
          </div>
        </div>
      </div>
    </StandardCard>
  );
};

export default Powerplant;
