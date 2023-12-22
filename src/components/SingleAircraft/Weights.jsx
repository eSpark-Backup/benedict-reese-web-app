import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Weights = ({ params }) => {
  return (
    <StandardCard
      className={`mb-[31px] pb-[49px] bg-[#ffffff] ${styles.weight_section}`}
    >
      <div className={`px-[28px] pt-[33px] ${styles.weight}`}>
        <SectionHeader title="Weights" className={styles.heading} />

        <div
          className={`${styles.upper_details} flex justify-center max-[1366px]:justify-evenly items-center`}
        >
          <div className="">
            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Max Take-Off Weight (lbs)
              </p>

              <p className="text-[#000000]">{params.max_landing_weight_lbs}</p>
            </div>

            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Max Landing Weight (lbs)
              </p>

              <p className="text-[#000000]">{params.number_made}</p>
            </div>

            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Max Payload (lbs)
              </p>

              <p className="text-[#000000]">{params.minimum_pilots}</p>
            </div>

            <div className="flex justify-between">
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Basic Operating Weight (lbs)
              </p>

              <p className="text-[#000000]">{params.number_made}</p>
            </div>
          </div>

          {/* -------- */}
          <div className={`justify-center mx-[53px] ${styles.border_div}`}>
            <span
              className={`w-[2px] bg-[#DEDEDE] h-[226px] block m-auto ${styles.border}`}
            ></span>
          </div>
          {/* -------- */}

          <div className="">
            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Max Ramp Weight (lbs)
              </p>

              <p className="text-[#000000]">{params.minimum_pilots}</p>
            </div>

            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Available Fuel (lbs)
              </p>

              <p className="text-[#000000]">{params.number_made}</p>
            </div>

            <div
              className={`flex justify-between mb-[30px] ${styles.detail_list}`}
            >
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Useful Payload (lbs)
              </p>

              <p className="text-[#000000]">{params.minimum_pilots}</p>
            </div>

            <div className="flex justify-between">
              <p className={`text-[#000000] mr-[46px] ${styles.left_p}`}>
                Baggage Weight (lbs)
              </p>

              <p className="text-[#000000]">{params.number_made}</p>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom_div} mt-[30px]`}>
          <p className="font-bold text-center">Baggage Capacity (Cubic Feet)</p>

          <div
            className={`flex justify-center mt-[23px] text-center ${styles.bottom_details}`}
          >
            <div className="">
              <p className="font-bold">Total</p>

              <p className="text-[#000000]">{params.lateral_db}</p>
            </div>

            <div className={`mx-[84px] ${styles.middle}`}>
              <p className="font-bold">Internal</p>

              <p className="text-[#000000]">{params.flyover_db}</p>
            </div>

            <div className="">
              <p className="font-bold">External</p>

              <p className="text-[#000000]">{params.approach_db}</p>
            </div>
          </div>
        </div>
      </div>
    </StandardCard>
  );
};

export default Weights;
