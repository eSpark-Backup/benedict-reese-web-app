import SectionHeader from "../shared/SectionHeader";
import StandardCard from "../common/StandardCard";

import styles from "./styles/styles.module.scss";

const Dimensions = ({ params }) => {
  return (
    <StandardCard
      className={`bg-[#ffffff] pb-[39px] ${styles.dimension_section}`}
    >
      <div className={`pl-[28px] pt-[31px] ${styles.dimension}`}>
        <SectionHeader title="Dimensions" className={styles.heading} />

        <div className="flex justify-center max-[1366px]:justify-evenly items-center">
          <div className="">
            <div className="">
              <p className="font-bold text-center text-[#000000]">
                Exterior Dimensions (Feet)
              </p>

              <div className={`flex mt-[23px] text-center ${styles.details}`}>
                <div className="">
                  <p className="font-bold text-[#000000]">Length</p>

                  <p className="text-[#000000]">{params.lateral_db}</p>
                </div>

                <div className={`mx-[70px] ${styles.middle}`}>
                  <p className="font-bold text-[#000000]">Height</p>

                  <p className="text-[#000000]">{params.flyover_db}</p>
                </div>

                <div className="">
                  <p className="font-bold text-[#000000]">Wingspan</p>

                  <p className="text-[#000000]">{params.approach_db}</p>
                </div>
              </div>
            </div>
          </div>

          {/* -------- */}
          <div className={`justify-center mx-[33px] ${styles.border_div}`}>
            <span
              className={`w-[2px] bg-[#DEDEDE] h-[148px] block m-auto ${styles.border}`}
            ></span>
          </div>
          {/* -------- */}

          <div className="">
            <div className="">
              <p className="font-bold text-center text-[#000000]">
                Interior Dimensions (Feet)
              </p>

              <div className={`flex mt-[23px] text-center ${styles.details}`}>
                <div className="">
                  <p className="font-bold text-[#000000]">Length</p>

                  <p className="text-[#000000]">{params.lateral_db}</p>
                </div>

                <div className={`mx-[70px] ${styles.middle}`}>
                  <p className="font-bold text-[#000000]">Height</p>

                  <p className="text-[#000000]">{params.flyover_db}</p>
                </div>

                <div className="">
                  <p className="font-bold text-[#000000]">Width</p>

                  <p className="text-[#000000]">{params.approach_db}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------- */}

        <div className={`mt-[39px] ${styles.bottom_div}`}>
          <p className="font-bold text-center text-[#000000]">
            Door Dimensions (Feet)
          </p>

          <div
            className={`mt-[23px] flex justify-center text-center ${styles.details}`}
          >
            <div className={`mr-[80px] ${styles.bottom_middle}`}>
              <p className="font-bold text-[#000000]">Height</p>

              <p className="text-[#000000]">{params.flyover_db}</p>
            </div>

            <div className="">
              <p className="font-bold text-[#000000]">Width</p>

              <p className="text-[#000000]">{params.approach_db}</p>
            </div>
          </div>
        </div>
      </div>
    </StandardCard>
  );
};

export default Dimensions;
